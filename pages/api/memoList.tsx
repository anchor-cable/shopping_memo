import { NextApiRequest, NextApiResponse } from "next";

export default (req:NextApiRequest, res:NextApiResponse) => {
    res.status(200).json({
        items:[
        { id: 1, item_name:"トイレットペーパー", amount:12,unit:"ロール" },
        { id: 2, item_name:"ティッシュペーパー", amount:5,unit:"箱" },
        { id: 3, item_name:"マスク", amount:60,unit:"枚" },
        ]
    });
  };