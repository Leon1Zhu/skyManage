
1. api/manage/getIndexInfo(获取平台管理首页信息)

 method: Get
 - 传入：
  userInfo:{} // 当前用户信息
 - 返回结果：
   ```javascript
   indexInfo: { //首页信息对象
     nodesArr: [], // 节点信息
     modulesArr: [], // 模块信息      
     hardwareArr: [], // 硬件信息
     usersArr: [], // 用户信
    } 
    ```

