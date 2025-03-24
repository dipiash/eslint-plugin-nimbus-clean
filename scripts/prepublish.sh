cd ./dist || exit
tar -xzf ./*.tgz

mkdir ../assets
mv ./*.tgz ../assets/

find . -mindepth 1 ! -path './package' ! -path './package/*' -exec rm -rf {} +
mv ./package/* ./
rm -rf ./package

