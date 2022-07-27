# kitty-ui组件库


### 使用pnpm来进行monorepo的开发。
 主要包含两个工程，一个是组件库组件，位于`package/components`目录下，另一个则是则是组件库文档，位于`example`目录下。

### 启动
  1. 组件库打包
     1. pnpm --filter "@ui1024/components" run build
     2. 单独为每个组件打包css，`pnpm --filter "@ui1024/components" run build:less`

  2. 组件库文档
     1. pnpm --filter "examples" docs:dev


### 组件库完成度
  1. Button 
  2. Icon