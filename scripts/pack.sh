npm pack --pack-destination ./dist

cd ./dist || exit
tar -xzf ./*.tgz
