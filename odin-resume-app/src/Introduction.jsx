import crockleyImage from '/nixonhead.svg'


function Introduction() {
    return(
        <>
          <div className="flex justify-center mx-auto">
            <h1 className="text-[72px] font-bold">
                Hello, I'm Jon Crockley!
            </h1>
            <img src={crockleyImage} alt="Jon Crockley" className="w-32 h-32"/>
          </div>
            <p className="mt-4 text-lg">
                Welcome to my Odin Project Resume App! This application is built using React and Vite, showcasing my skills in modern web development. Feel free to explore and learn more about me and my projects.
            </p>
        </>
    )
}

export default Introduction;