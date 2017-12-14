window.onload=function () {
    let table=document.querySelector('tbody');
    let addInfo=document.querySelector('.add');
    table.ondblclick=function (e) {
        let ele=e.target;
        if (ele.nodeName=='TD'&& ele.nodeName!='BUTTON'){
            let old=ele.innerText;
            ele.innerText='';
            let inputs=document.createElement('input');
            inputs.value=old;
            ele.appendChild(inputs);
            inputs.onblur=function () {
                let newValue=inputs.value;
                ele.innerText=newValue;
                ele.removeChild(inputs);
            }
        }else if (ele.nodeName=='BUTTON'){
            let trs=ele.parentNode.parentNode;
            table.removeChild(trs);
        }

    }
    addInfo.onclick=function (e) {
        let newTr=document.createElement('tr');
        newTr.innerHTML=`
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><button class="del">删除</button></td>
        `;
        // table.appendChild(newTr);
        table.insertBefore(newTr,table.children[1]);
    }
};