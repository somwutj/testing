# Init Project
```bash
# initialize
$ npm init -y

# instlal typescript
$ npm install -save-dev typescript

# congiure typescript
$ npx tsc --init

# create src ditectory
$ mkdir src

# create src/index.ts

```

# Setup Build
```bash
# add build scripts to package.json
# "build": "tsc"

# set outDir in tsconfig.json
# "outDir": "./dist

$ npm run build
```


# Setup Testing
```bash
# install
$ npm i -save-dev jest typescript ts-jest @types/jest


# init jest config
$ npx ts-jest config:init
```