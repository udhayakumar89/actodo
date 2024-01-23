function Header(Props) {
    return (
        <div>
            <h1 className='text-3xl font-medium'>Hello {Props.name}!</h1>
            <p>Manage your Activities</p>

        </div>
    )
}
export default Header