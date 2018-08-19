GIT提交规则
## Commit 格式(暂定)

为了方便参与者理解, 并统一 commit message 的格式, 参考其他开源项目, 暂时遵循如下的格式(冒号后有空格):
${action}: ${message body}

所有英文字母都为小写, 其中 ${action} 暂定如下几种:

* feature: 添加新的特性, 新的系统功能等
* fix: 修复某个 bug, 如果有 bug 编号, 需要在 message body 中包含对应的编号
* modify: 修改已有的某个功能
* op: 优化已有功能, 但是不更改功能
* test: 增加或是修改测试用例
* etc: 其他, 不包含以上场景的提

### 示例

```
fix: #156 can't get user info
```

```
feature: add find user by name api
```

```
etc: batch change file structure under tmp directory
