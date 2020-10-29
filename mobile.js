class Mobile{
    constructor(name,id) {
        this.id=id;
        this.name=name;
        this.msg='';
        this.inbox=[];
        this.outbox=[];
    }
          writeMsg(msg){
             this.msg=msg;
        }

        sendMsg(mobile){
             mobile.takeMsg(this.msg);
             this.outbox.push(this.msg);
        }

        takeMsg(msg){
             this.inbox.push(msg);
        }
    }