// import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    // const [blogs, setBlogs] = useState([
    //     { title: 'Full Stack Course', body: 'lorem 5..........', author: 'SP NAK', id: 1},
    //     { title: 'Flutter Course', body: 'lorem 5..........', author: 'kakashi', id: 2},
    //     { title: 'Web Development course', body: 'lorem 5..........', author: 'SP NAK', id: 3},
    // ]);

    // const [name, setName] = useState('SPV')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // };

    // useEffect(() => {
    //     // console.log('================================');
    //     // console.log(`use effect is working.... ${blogs.length}`)
    //     // console.log(blogs);
    //     // console.log('--------------------------------');

    //     // console.log('effect is working...');
    //     // console.log(name);

    // }, []);

    // const [name, setName] = useState('Nin ja');
    // const [age, setAge] = useState(26);

    // const handleClick = () => {
    //     setName('VataNak');
    //     setAge(20);
    // }

    // const handlesClickAgain = (name) => {
    //     console.log('hello ' + name)
    // }

    return (
        <div className="homepage">

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            {blogs && <BlogList blogs={blogs} title="All Course "/>}

            {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === 'kakashi' )} title="kakashi Course"/> */}

            {/* <button onClick={() => setName('Sun Phanith VataNak') } >Change Name</button>
            <p>{ name }</p> */}

            {/* <h2>Home Page</h2> */}
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={() => handlesClickAgain('VataNak')} >Click me agian</button> */}
        </div>
    );
}

export default Home;