import "../css/tree.css"
import { useState } from "react";

const tree = (tree)=>{
    const[pruned, pruneTree] = useState(false);
    
    const doTreeJob = ()=>{
        console.log("Doing a tree job");
        pruneTree(true);
    };

    return (
        <>
            <div class="tree">
                <img src={tree.image} alt={tree.name} />
                <h3 class={pruned?"pruned":""}>{tree.name}</h3>
                <button onClick={doTreeJob}>Prune Tree</button>
            </div>
        </>
    );
}

export default tree;