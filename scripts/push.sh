#!/bin/bash

clean_up() {
    rm -rf "/tmp/src"
    rm "/tmp/${package_version}.json"
    rm -rf src/src
}

echo "[1/3] - Generating documentation..."
echo

if ! source ./scripts/docgen.sh; then
    echo "An error has occured."
    exit 1
fi

# add missing generics in classes
sed -i 's/"name": "Giveaway"/"name": "Giveaway<TDatabaseType>"/g' "./docs/generated/${package_version}.json"
sed -i 's/"name": "Giveaways"/"name": "Giveaways<TDatabaseType>"/g' "./docs/generated/${package_version}.json"

# add missing generics in utility types with 2+ type arguments
sed -i 's/"name": "If<T,/"name": "If<T, IfTrue, IfFalse>/g' "./docs/generated/${package_version}.json"
sed -i 's/"name": "Optional<T,"/"name": "Optional<T, K>"/g' "./docs/generated/${package_version}.json"
sed -i 's/"name": "MapCallback<T,/"name": "MapCallback<T, TReturnType>/g' "./docs/generated/${package_version}.json"

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
git rm --cached . -r

cp "/tmp/${package_version}.json" "./${package_version}.json"
cp "/tmp/master.json" "./master.json"

git add "${package_version}.json"
git commit -m "docs: documentation update for v${package_version}"
git push -u origin docs


echo
echo "[3/3] - Pushing sources..."
echo


is_version_branch_existing="$(git rev-parse --verify "$package_version")"

if [[ -z $is_version_branch_existing ]]; then
    git checkout --orphan "$package_version" > /dev/null 2>&1
else
    git checkout "$package_version" > /dev/null 2>&1
fi

git reset --hard "origin/$package_version" > /dev/null 2>&1
cp -r "/tmp/src" "./src"

git add .
git rm --cached src/src > /dev/null 2>&1

git commit -m "docs: sources update for v${package_version}"
git push -u origin "$package_version"


is_master_branch_existing="$(git rev-parse --verify "master")"

if [[ -z $is_master_branch_existing ]]; then
    git checkout --orphan "master" > /dev/null 2>&1
else
    git checkout "master" > /dev/null 2>&1
fi

git reset --hard "origin/master" > /dev/null 2>&1
cp -r "/tmp/src" "./src"

git add .
git rm --cached src/src > /dev/null 2>&1
git commit -m "docs: sources update for v${package_version}"
git push -u origin "master"


clean_up

git checkout main
git reset --hard origin/main

echo
echo "Done!"
