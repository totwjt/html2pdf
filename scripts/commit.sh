#!/bin/bash

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
  echo "检测到未提交的更改..."

  # 添加所有更改
  git add .

  # 获取提交信息
  if [ -z "$1" ]; then
    echo "请输入提交信息:"
    read commit_message
  else
    commit_message="$1"
  fi

  # 提交更改
  git commit -m "$commit_message"

  # 检查是否有远程仓库
  if git remote -v | grep -q "origin"; then
    # 拉取最新更改
    git pull origin main

    # 推送更改
    git push origin main
    echo "更改已成功推送到 GitHub"
  else
    echo "未找到远程仓库，请先添加远程仓库"
  fi
else
  echo "没有检测到未提交的更改"
fi