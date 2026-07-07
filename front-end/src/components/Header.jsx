import React from 'react'
import { Link } from 'react-router-dom'

 Header = ({user}) => {
  return (<>
  <div className='shadow-md'>
<div className='flex items-center justify-between px-4 py-4 max-w-7xl mx-auto sm:px-8'><Link to='/' className='flex items-center'>
    <img className='h-10' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8HDw8QEA8VDxAWFhAQEBAXEBAQFxcQFxEXFhUSFhUZHjQjGBolGxUTIT0hJSstLi4uFx8zODMtNygtLisBCgoKDg0OGxAQFysgICIrLSstKy0tLS0tLystLy0tKy0tLS01LSstKy0tLS0tLS0tLS0tKy0tKy0tLTctLS0tLf/AABEIAJ0BQgMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABAUGBwECAwj/xABGEAACAgIAAwUEBAgLCQEAAAAAAQIDBBEFEiEGEzFBYRQiUYEHcZGhFSNCUmKxwdEkMjNTVWNygpSi0kOSk6OzwtPh8Rb/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwUBBAYCB//EACwRAQACAgEDAwMCBwEAAAAAAAABAgMRBAUhMRIyYRNBUXGBFCIjM1KRsUL/2gAMAwEAAhEDEQA/AN4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/EMyvh9Vl1j5a4Rc5vW9RS2+nmHvHjtkvFKx3lqrin0p5Ns/wCDVQqr8u8TnJr109L7zDp8PQccV/qW3Pw2R2Y4suOYlORrlcl78fHU09SS9NpiO/dz3LwTgzWx/hamWsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQ9pu12D2YjvJuUZtbjSveskvioLrr1JceG+T2w82tEKrsD2+h2ztyoQxpURqVcouVkZOUZuS6xS1F+6+m34kmfjTiiNyxW/qZHx/DXEMTIpfVTrsj83F6+81mzxsk48tbx9pfPVdDaT110n9xF6/s+gzeG2voiv3iXVfmWN/KaUv3nusuT65T+tF/zH/GdnpSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8sm1UQnN+EYyk/qS2ZiNzpiZ1D5M4hfPiV1t9knOdkpTlJtt9X0XXyS0teh0NNVrEK3Jl3LZn0Ae5lZ6+NVD+yyz95o9Q9sNrjTuG65raa+RVtqPLReXidzZbF+U7F9k2V9rd5dphyTbHWfhl/0Xy7q7Jh+dCuSXrGUlJ/5ok+C29qrrPelZ+ZbGNlz4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKrtXd7PgZs/zaL3/y2SYo3eP1eMk6rL5fjDSRdqWbd2yvoL93Ny/WmP3Wf+zS5vthu8OdzLdZWrBp3j1Pd5eSv6yx/bLf7Ssye6XW8S28NP0W30fLkztvzqsj/mg/+0l48/z6avVY3h/dsw3nOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRce7YcO7PvlycqFc9b7vfNPX9iPUlphvf2wxMxDAO1f0rYHFMbIxMeu6crq7KVY4KEYuUWuZpvbXyNvHwr1n1W+yDLmrFJav5Tc2pNrTs/xzJ7PznZjSUJyjySbgpe7zJ9E/VEOWsXjUrjo2OuTLNbfhb3du+K3eOZKP9mFcf2GvOGkfZ12PhYY/8qu7imRkyc53TlKT3KTl4v5Ec4qfhaY6RWNRHZzj511MuaF9sJfnRtsi/tTI/RWviIbH0qWjVqxP7NkfRVxjIzL76rrp3RUIyjzycmnzNPTfXzPFoUPWuNjx1ralYj9GzDw54AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA62TVScpNRiurbekl5tsMTMRHd84cZ7E52ZlZFscnFyOeyyzvfbKouSlJtNxfVPTS15aLjHzcNaRDTtalp90Iv8A+FzsJO6fcShBOUlDKrslr0iurfoLc7DMa2iyVr6J1aJePsdn83L/AHJfuIf4jH/lCu9F5+ybwrgGVxax101++oub533S5U0vGXntroeL8vDWO9oXPRbfSzTa8THZcx+jzif83V/iKyGebg/ydXXn4Y87/wBIN/ZnKxZyhOMFKL00rE/Lfj8zXtz8MTrayxZ6Wr6oe2B2Yysyargocz3rdml0W/HR4/jcNp1Epr8zFjr6rbbE+jrsvk8Evvsv5EpQjCHLPn68zb306eR6+pW3idqHqvOxcita49/uz8KQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAi8Uw1xCi2mT0pxlBteW1rYeb19VZhprifYTP4a3+J7+HlOv3unxcfFfeeZc7m4GanjursTHljyanBwfwlFxf3mrnR8atq2n1QvsRlVlmV3ihaUPZW57Trys8UJaRV2tbfluRCqy1+Ml9f7EXnGmfpwt8H9uHfBX4xfP9R55tpjFLxyf7bLuyz1ZNfor9Z66Be05LRMqTkR2hk51bUAAAABXcd4k+FVQsUefmtxqdb10tvhW5fLm38gLEABA45xB8Lodqjz+/RXy71/KXwr3v059/ICeAAAAAAAAAAAAAAAAAAAAAAAAAAADgCm7Y095w/N0lzKm5xeuqag9NPyGome6DkREY7Tr7NFU8Uvp8LH89S/WercTDbzVQU5WSniWafR3bPj19tVz92NfOnFKL5udL9Wyv5HSsN/HZbcDmZL2mLM+l2ah5WSXyTK23QMUz2vK3jkT+GGcSpVN1sU96k1v6iD6cYZ+nE+HQce28VZSOBYTzb1BPl92T3rfh/wDRPHnkx9OJ0i5mT049swweDzw428tqVko8sJ8m1F/Hlb97yLHpvTZ4szMzvajy5fW6fg/iH9IR/wAHD/WWyFGu4hmcBallyryMVtRlkwg6ZUttJSthtqUN+Mk1rpta20Fpx3iX4Jx7LuXnktKEN65rJSUYQ35bk0t+QECvB4nYtzzqq5Pq4QxFKMf0VKU9vXx8/QCNxTIz+z9U8qzIry6a0531ez9zPul/GnXJSe5JbfK118NoDt2/yI4+FG2T9yGRg2SaTb5Y5Vcnpeb0gPXFXEuKLvZWQwa5bddPdK+zk/JlZNvSk115Uum9bYHW3OzOByi8qUMjFk4wlkRrdU6ZSaUXZDbUoNte8tcvmmuqD07dJywJqMuWTtwlGWubT9sp09ef1Aej4dn/ANIr/B1/6gLmtOMUm+Z6Scta29dXryAqJ8Pz5NtcQilttL2SD0t9Fvm6gR8hcT4anYrK86C6zp7r2ezl83XJSactfktLfxQFvw/Pr4jTXfXLmqnFWRl4e61vqn4NfB+AFLi52Zx9d7jThi4vXurZVu6y6P8AORjtKEH5b22uvQD1txeKY654ZVOQ1t9zPH7lS6fxVZGT5H66f1AWHBeJx4tV3ijKuScq7apa5q7YvU65a6PT810a010YE8AAAAAAAAAAAAAAAAAAAInFqu/x74ePNXZFfW4NCEeWN0mPh84qOib1OUny2D9Dkf4TlP8AqoffN/uPFpWnS/dLa5HK7az4lLnuufxnN/5mczltvJafl0mCNYqx8LfsXXvInL4VtfbKOv1M2+nV3lmfw1OozrHEfK+47xK3GlTj48Yyybufkc98kK4Jc900nuSXNFaXi5JbXiXimeP4GzZdXxW1PzUcfEjHfopQbS+tsCDx3geTLEyefid1kO6t5oOjD1Jcj3F6r8GBZV4MeNcNqqslJd5RTuaa5oz5IyjZFv8AKUkn180B4128VwtRlVRmRXTvI2SxptfF1yTjv6pL6gObO0ixNe2YtuJBvl76XJbUm/zp1t8i9ZJL1Mjp25irMWtPqnlcPTXp7ZUYGRAVPa6Knw7PTW17Pk/9GQEDtLLm4ZW2+vPw5t+vtdAGSgQOOcSXCaJ28rsluMK610c7ZyUYQT8tyaWwK6vhfEMhc1vEXTN9XXRRRyR9E7YylJ+u1v4IDt+Bcz+lb/8AgYX/AIgKrgOHbbwziOPCxys73idVdj5YtzlOfvaj0XvSb6GZGQ9ncyvOxMedXSHJCPJrTg4rTra8nFprXoYFkBj/AGZmsm/iN0Huqd8YQa8JSqqjXZNPz96Lj/cAyAAAAAAAAAAAAAAAAAAAAOJLYGou1X0fZGFOduMu/qbcuRfykNvetflL6uvoFHyuBeJm1O6b9D9Mqr83mi4tQpi04uLT5p9Ool76ZWa2tuGzrZckZP4Jv7EeLz/LK6rG501i3zbfx2/t6nJ+rfd01Y1GmUdiadd9P48kfs2/2lx0uvusrOpW9tUzj+PbTdjZlNbudKurtpjrmlRbyOTgn0c1KuD15pNeJbqp1Xa7E8+/T+Dw8tNej9wMonEcyfaiEsXGrtrps3DIyp1ToSpfSUKlNKUptdN60t734Jha8drvrxf4H0srdU4VrlXPXXOMpUJy6LmhGUd+vivECJDtfi696GRXL8qEsLK2n5p6g19jaAh8a7QV8Ux7sfGouyLrYWVQhLGvqhucXHmssnFRjFb2/Pp0TAkdo8OcMLGqinZKF/DU2k22oZNXNL6tJsDJAKztPCVuBmxinKTx8iMYpbbbqkkkvNgdb+HLieD7PPcOeqEebzhNRTjJesZJP60GEDG7RzwF3WfRbXdH3XbXRbfVYl4WQlWny7WnyySae118QymcdxZcZxE6GlYnTk0c6lFOdc42QjNa3FPWn02tgR6+1lEUldTkY9n5dUsW+bi/gp1xcZL1TYHW7tN7UnDCx7b7n0i50XUVRf51llkV0Xwjt+gYWPAOGfgjHhTzd5P3p22a1z3Tk52Wa8tylJ68gyq+OcBnVHIyMC2zHyZRlN11yh3dtqj7rnXNOPM+i5lpvptgVvDVDi8lRkcRy3NrcsayqOE5pJcyTjWnNLz5JAZli48MSEK64KuuKUYQikkorwSXkGHqGQAAAAAAAAAAAAAAAAAAAAHVQS29dX4sMREQjcWhOyi2MOsnGSS+RByYtOKYr5S4ZiMkTbw1048r01prxT6NejRy09vLooncbhm/ZSjusaL1/GcpfLek/sR0PTq6wxKk5t/Vln4XJvtQA4AAAOQAAAAAAAAAABWx4prNliSio/iYX1S5us/flGyKX6P4t/3wIHbdR9lT/wBsraHitfxvaO9ioqPn16p/o8wYZAgy5AAAAAAAAAAAAAAAAAAAAAAAAIuRw6nJe51xk/jrr9pDbBjt5hJXLesaiUiEFBJLol0S9PgSxERGoeJnbsZYAAAAAAAAAAAAAAAAEHivCaeKxirYvcXz1zjKVc4S1rmhOPWL0BGwuz1ONbG6UrL7Y7UJ3WytcN9HyJ9IvXmlsC3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z" alt="" /></Link>

<div className='flex items-center border border-gray-300 pr-4 pl-6 py-2 rounded-full shadow-md'>
    <p className='pr-4 border-r border-r-gray-300 '>Qualquer lugar</p>
    <p className='px-4 border-r border-r-gray-300 '>Qualquer semana</p>
    <p className='px-4'>Hóspedes</p>
    <div className='bg-primary-400 rounded-full p-2 text-white'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div>

</div>
<div><Link to='/' className='hidden lg:flex items-center border border-gray-300 pr-4 pl-6 py-2 rounded-full shadow-md gap-2'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</Link>

    <Link to={user? "/acount" : '/login'} className=' rounded-full p-2 text-gray-600'>
  
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-gray-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
    {user ? <p className='max-w-20 truncate sm:max-w-32'>{user.name}</p> : <></>
}
</Link>


    </div></div></div>
</>
  )
}

export default Header