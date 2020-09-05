import React from 'react';
import { RecycleBalance} from '../api/home/index'
export default class Home extends React.Component{
    componentDidMount() {
        let params = {
            header:{device:'MobileWeb',method:'default_getgames',platform:'topgame'},
            data:{type:4,show_cp:'0'}
        }

        // RecycleBalance(params).then(res => {
        //     const test = res.data
        //     test.map((item)=>{
        //         console.log(item.name)
        //     })
        //   }).catch(err=>{console.log(err)});          
    }
    render(){
        return(
            <div>這是首頁呢</div>
        )
    }
}