import cpy from 'cpy';
import { resolve, dirname } from 'path';
import less from 'less';
import glob from 'fast-glob';
import fs from 'fs';


const sourceDir = resolve(__dirname, './src');
const targetLib = resolve(__dirname, './dist/lib');
const targetEs = resolve(__dirname, './dist/es');


const buildLess = async () => {

  // 将less文件复制到打包目录
  await cpy(`${sourceDir}/**/*.less`, targetLib);
  await cpy(`${sourceDir}/**/*.less`, targetEs);

  // 获取打包后的.less文件目录
  const lessFilePaths = await glob('**/*.less', {
    cwd: sourceDir,
    onlyFiles: true
  })
  console.log('allpath', lessFilePaths)
  // 遍历less文件

  for (let filePath of lessFilePaths) {
    console.log('filePath', filePath);
    const lessCode = fs.readFileSync(`${sourceDir}/${filePath}`, 'utf8');

    // 解析less，生成css
    const code = await less.render(lessCode, {
      paths: [sourceDir, dirname(filePath)]
    })

    const cssPath = filePath.replace('.less', '.css');

    fs.writeFileSync(resolve(targetEs, cssPath), code.css);
    fs.writeFileSync(resolve(targetLib, cssPath), code.css)
  }
}


buildLess()
