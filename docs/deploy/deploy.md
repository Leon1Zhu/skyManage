1. api/deploy/getModuleDeployInfo(根据模块信息获取当前模块下需要安装的组件以及当前模块和各个组件的安装进度，在安装过程中会不断调用，更新进度)

 method: Get
 - 传入：
  userInfo:{} // 当前用户信息
  moduleId: '' // 模块ID
 - 返回结果：
   ```javascript
    moduleDeployInfo: { //模块安装信息
    
    } 
    ```

2. api/deploy/DeployWithModuleId(根据传入的模块ID开始执行安装)

 method: Post
 - 传入：
  userInfo:{} // 当前用户信息
  moduleId: '' // 模块Id
 - 返回结果：
   ```javascript
     moduleDeployInfo: { //模块安装信息
     } 
    ```
3. api/deploy/stopModuleDeploy(根据传入的模块Id或者组件Id设置暂停)

 method: Post
 - 传入：
  userInfo:{} // 当前用户信息
  moduleId: '' // 模块Id
 - 返回结果：
   ```javascript
     stopResult: true // 暂停结果
    ```
    
4. api/deploy/stopComponentDeploy(根据传入的模块Id或者组件Id设置暂停)

 method: Post
 - 传入：
  userInfo:{} // 当前用户信息
  componentId: '' // 组件Id
 - 返回结果：
   ```javascript
     stopResult: true //暂停结果
    ```
