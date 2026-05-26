import reactlogo from './assets/react.svg'


function Hello(props) {
    function getname(){
        return props.name
    }
     function clickHandle(){
        alert('button clicked')
     }
     const handleInput = (event) => {
        console.clear()
        console.log("value :",event.target.value)
     }

const isloggedin = true;

    return(
        <>
     <h2>hello world</h2><hr/>
     <img srcSet={reactlogo} /><hr/>
    <h1>Hello {getname()}</h1>
    <button onClick={clickHandle}>submit</button><hr/>
    <input type='text' onChange={handleInput} placeholder='type somthing'/><hr/>
    <div>{isloggedin ? <h1>welcome user</h1> : <h2>please login</h2>}</div>

    </>
    )
}
export default Hello
