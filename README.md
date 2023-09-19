[Live demo here :)](https://support-chat-eight.vercel.app/) (credentials are admin - admin)

# 🛠️ Project Setup
***In order to get the app running with the expected behaviour you'll need these:***

## 🟢 Node 18.14.0 *(LTS)*
You can use the node binary from the official package or a node package manager (such as [NVM](https://github.com/nvm-sh/nvm), [FNM](https://github.com/Schniz/fnm), [N](https://github.com/tj/n))

## 🐱 PNPM

With Node LTS Installed, you can enable corepack...

```shell
corepack enable
```

...then install the dependencies

```shell
pnpm install
```
---

## 📑 Configuration
Copy the `.env.example` file and rename it to `.env`, then you can replace the values inside if needed.

---

## ⚡ Development Server

You can start the dev server by using...

```shell
pnpm dev
```

...or start & open a browser tab by using

```shell
pnpm serve
```
---

## 📈 Build

You can use this to build into the production version of the app...

```shell
pnpm build
```
...also you can get running a preview of that build

```shell
pnpm preview
```
