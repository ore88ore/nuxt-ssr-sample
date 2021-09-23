# nuxt-ssr-sample

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## ECR へイメージを push

### イメージをビルド

```bash
# イメージをビルド
$ docker build -t nuxt-ssr-sample .

# 参考）起動する場合
$ docker run -it -p 3000:3000 nuxt-ssr-sample
```

### イメージを push
```bash
### AWS 環境へ CLI でアクセスできるようにセットアップ

# ECR プライベートリポジトリへの認証
$ aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin [AWSアカウントID].dkr.ecr.ap-northeast-1.amazonaws.com

# ECR プライベートリポジトリを作成(リポジトリ名は任意の名前を指定)
$ aws ecr create-repository \
--repository-name nuxt-ssr-sample \
--image-scanning-configuration scanOnPush=true \
--region ap-northeast-1

# push するイメージにタグを付ける
$ docker tag nuxt-ssr-sample:latest [AWSアカウントID].dkr.ecr.ap-northeast-1.amazonaws.com/nuxt-ssr-sample:latest

# イメージを push する
$ docker push [AWSアカウントID].dkr.ecr.ap-northeast-1.amazonaws.com/nuxt-ssr-sample:latest
```
