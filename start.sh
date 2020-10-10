#!/bin/bash

nodeDep=$(which node)
if [ -z "$nodeDep" ];
    then 
        echo "Node not found, quiting!"
        exit 0
fi
npmDep=$(which npm)
if [ -z "$npmDep" ];
    then 
        echo "NPM not found, quiting!"
        exit 0
fi
gitDep=$(which git)
if [ -z "$gitDep" ];
    then 
        echo "GIT not found, quiting!"
        exit 0
fi

git pull

npm install
node index.js