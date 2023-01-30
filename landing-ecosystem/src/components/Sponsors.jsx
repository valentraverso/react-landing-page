
const infoSponsor = [
    {name: 'Animal Planet', href: '#', logo: './src/images/sponsors/animal-planet-logo.png'},
    {name: 'Nat Geo', href: '#', logo: './src/images/sponsors/nat-geo-logo.png'},
    {name: 'Discovery Channel', href: '#', logo: './src/images/sponsors/discovery-channel-logo.webp'}
]

export default function Sponsors(){

    return(
        <section className="sponsors-section content-centered">
            <h2>Sponsors</h2>
            <div className="images-sponsor">
            {
                infoSponsor.map(({name, href, logo}) => (
                <div>
                    <img src={logo}/>
                </div>
                ))
            }
            </div>
        </section>
    )
}