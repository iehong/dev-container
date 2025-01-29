#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// 将 .devcontainer 目录复制到当前项目
const sourceDir = path.join(__dirname, "../.devcontainer");
const targetDir = path.join(process.cwd(), ".devcontainer");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

// 递归复制文件
function copyFiles(source, target) {
  const files = fs.readdirSync(source);
  files.forEach((file) => {
    const srcFile = path.join(source, file);
    const tarFile = path.join(target, file);
    if (fs.lstatSync(srcFile).isDirectory()) {
      if (!fs.existsSync(tarFile)) fs.mkdirSync(tarFile);
      copyFiles(srcFile, tarFile);
    } else {
      fs.copyFileSync(srcFile, tarFile);
      console.log(`✅ Copied: ${file}`);
    }
  });
}

copyFiles(sourceDir, targetDir);
console.log("🎉 Dev container config initialized!");
