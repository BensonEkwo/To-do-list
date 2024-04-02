import { useRef, useState } from "react";
import Vlog from './Vlog'
const Form=()=>{
const [title,setTitle]= useState('')
const [content,setContent]=useState('')
const [experience,setExperience]=useState('Ok')
const [post,setPost]=useState(null)
const [submitted,setSubmit]=useState(false)
const titleRef= useRef(null);
const contentRef= useRef(null);
const change=(e)=>{
    const {name,value}=e.target;
    if(name==='title'){
        setTitle(value)
    }
    else if(name==='content'){
        setContent(value)
    }
    else if(name==='experience'){
        setExperience(value)
    }
}

const handleSubmit=(e)=>{
    e.preventDefault()
    setPost({title,content,experience})
    setSubmit(true)
titleRef.current.value=''
contentRef.current.value=''
}

    return(
<div className="form">
    <h1>My Vlog</h1>
    <form onSubmit={handleSubmit}>
        <label> Day:
        </label>
        <input type="text"
        name='title'
       ref={titleRef}
        required
        onChange={change}
        />
        <label>vlog content:</label>
        <textarea
        name='content'
       ref={contentRef}
       onChange={change}
        required></textarea>
        <label>experience:</label>
        <select
        name='experience'
        value={experience}
        onChange={change}
        >
            <option value='Great'>Great</option>
            <option value='Ok'>Ok</option>
            <option value='Bad'>Bad</option>
        </select>
        <button type='submit'>Add vlog</button>
    </form>
    {submitted&&<Vlog title={post.title} vlog={post.content}exp={post.experience}/>}
</div>
    )
    
}

export default Form;
