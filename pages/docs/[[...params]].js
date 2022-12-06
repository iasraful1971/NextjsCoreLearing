import { useRouter } from "next/router";


function Doc(){
    const router = useRouter();
    const {params  = []} = router.query;
    if(params.length === 2){
        return <h2>viewing docs for features {params[0]} and concepts {params[1]} </h2>
    }else if (params.length === 1) {
        return <h2>Views doc for features {params[0]} </h2>
    }
    console.log(params)
    return <h1> This is Doc Home page</h1>
}

export default Doc