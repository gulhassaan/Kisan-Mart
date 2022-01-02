class ApiFeatures{
    constructor(query,querystr){
        this.query=query;
        this.querystr=querystr 
    }
    search(){
        const keyword = this.querystr.keyword ? {
            name:{
                $regex:this.querystr.keyword,
                $options: "i",
            },
        }:{};

        this.query = this.query.find({...keyword});
        return this;

    }
    filter(){
        const queryCopy = {...this.querystr}
console.log(queryCopy);
        //removing category
        const removefields = ["keyword","page","limit"];
        removefields.forEach(key=>delete queryCopy[key]);
        console.log(queryCopy);
    }
}

module.exports= ApiFeatures