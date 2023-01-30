function TwoColumns(props) {
    return (
        <section className='about-us'>       
        <h2>About Us</h2>
            <div className="about-us-align-center">
                <div className="width-60">
                    <div className='left-side-about-us'>
                        <p>Saving endangered species is crucial for several reasons:</p>
                        <ol>
                            <li>
                                Biodiversity: The extinction of a species can disrupt the delicate balance of an ecosystem and reduce overall biodiversity.
                            </li>
                            <li>
                                Climate Regulation: Many species play important roles in maintaining the earth's climate, such as pollination and carbon sequestration.
                            </li>
                            <li>
                                Economic Benefits: Endangered species such as bees and bats provide valuable services to agriculture through pollination.
                            </li>
                            <li>
                                Scientific & Medical Advancements: Endangered species can hold valuable genetic material for future medical and scientific advancements.
                            </li>
                            <li>
                                Ethical Considerations: Many people believe it is our moral obligation to protect other species and preserve the earth's natural heritage for future generations.
                            </li>
                            <li>
                                Indicator of Environmental Health: The declining populations of endangered species can indicate larger environmental issues that need to be addressed.
                            </li>
                        </ol>
                        <p>
                            However, saving endangered species requires a multi-disciplinary approach involving conservation efforts, research, and education, as well as addressing the root causes of species decline such as habitat loss, hunting and poaching, and climate change. Without a concerted effort to protect endangered species, they could be lost forever, along with the important benefits they provide to the earth and its inhabitants.
                        </p>
                    </div>
                
                <div className="right-side-about-us">
                    <img src='./src/images/lion-close.jpg' alt='lion walking' />
                </div>
                </div>
            </div>
        </section>
    )
}

export default TwoColumns;