#!/bin/bash

package_content="$(< ./package.json)"
package_version="$(jq -r '.version' <<< "${package_content}")"

source_pattern="./src/**/*"
output_path="./docs/generated/${package_version}.json"

customPath="./docs/index.yml"
js_config_path="./jsconfig.json"

clean_up() {
    rm -rf "/tmp/src"
    rm "/tmp/${package_version}.json"
}

echo "[1/3] - Generating documentation..."
echo

if ! docgen -s ${source_pattern} -o ${output_path} -c ${customPath} -g -S 1 -j ${js_config_path}; then
    echo "An error has occured."
    exit 1
fi

cp "./docs/generated/${package_version}.json" "/tmp/${package_version}.json"
cp -r "./src" "/tmp/src"

echo
echo "[2/3] - Publishing documentation..."
echo

is_docs_branch_existing=$(git rev-parse --verify docs)

if [[ -z $is_docs_branch_existing ]]; then
    git checkout --orphan docs > /dev/null 2>&1
else
    git checkout docs > /dev/null 2>&1
fi

git reset --hard origin/docs > /dev/null 2>&1
printf ".*\n*.[jt]s\n*.md\n*.sh\n*.y[a]ml\n*config.js*\npackage*.json\nsrc/\ndocs/\nscripts/\nnode_modules/\n" > .gitignore

cp "/tmp/${package_version}.json" "./${package_version}.json"

git add .
git commit -m "docs: documentation update for v${package_version}"
git push -u origin docs

echo
echo "[3/3] - Pushing sources..."
echo

git checkout "$package_version"
is_version_branch_existing="$(git rev-parse --verify "$package_version")"

if [[ -z $is_version_branch_existing ]]; then
    git checkout --orphan "$package_version" > /dev/null 2>&1
else
    git checkout "$package_version" > /dev/null 2>&1
fi

git reset --hard "origin/$package_version" > /dev/null 2>&1
cp -r "/tmp/src" "./src"

git add .
git commit -m "docs: sources update for v${package_version}"
git push -u origin "$package_version"

clean_up
git checkout main

echo
echo "Done!"
