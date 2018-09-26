## 主机配置
1. api/deploy/newtask/hostConfig/testLink(用于对用户添加的主机进行连接测试)

 method: Get
- 传入：
   * userInfo:{} // 用户信息
   * testHostInfo: {} // 主机配置信息
- 返回结果：
   ```javascript
   testResult: true, // 测试结果
   errorMessgae : '', // 测试信息，用于报错的时候对用户进行提示
   ```
2. api/deploy/newtask/saveTaskConfig(用于对用户添加的主机配置信息进行保存)

 method: Post
- 传入：
   * userInfo: {} // 用户信息
   * taskConfig: {} // 任务、主机配置信息
- 返回结果：
   ```javascript
   saveResult: true, // 测试结果
   ```

## 选择模块
2. api/deploy/newtask/selectedComponent/getComponents(获取系统的模块以及组件信息)

method: Get
 - 传入：
 
 - 返回结果：
   ```javascript
    modulesInfo: [ // 模块信息
      {
        ...,
        componentsInfo: [], // 组件信息 ，应包含是否具有必配项和是否已配置
      },
    ] 
   ```
2. 保存直接调用api/deploy/newtask/saveTaskConfig


## 选择组件
1. api/deploy/selectedComponent/getComponentRelyInfo(获取当前系统的组件依赖信息)

method: Get
  - 传入：
 
  - 返回结果：
    ```javascript
    componentRelyInfo: {} //组件的依赖关系数据
    ```
2. 保存直接调用api/deploy/newtask/saveTaskConfig

## 组件配置
1. api/deploy/newtask/componentConfig/getComponentConfig(获取单个组件的配置)

method: Get
- 传入：
   * userInfo: {} // 用户信息
   * componentId: '' // 需要获取详细配置信息的组件id
- 返回结果：
   ```javascript
   componentConfig: {}, // 组件配置信息，其中配置需要按必配、高级、一般、进行分类
   ```
2. 保存直接调用api/deploy/newtask/saveTaskConfig

## 预览界面
* 暂时不需要额外的接口调用
