function Card(Props){
    return(
    <div style={{backgroundColor:Props.bgcolor}} className='px-10 py-5 flex-grow text-center rounded-m '>
        <h1 className='text-2xl font-medium '>{Props.title}</h1 >
        <p>{Props.subtitle}</p>
    </div>
    )
    }
    export default Card