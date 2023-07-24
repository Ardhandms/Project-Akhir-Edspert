import {Card, Container, Row, Col, Image} from 'react-bootstrap'
import dune from '../assets/images/new/dune.jpg'
import everything from '../assets/images/new/everything.jpg'
import infinite from '../assets/images/new/infinite.jpg'
import joker from '../assets/images/new/joker.jpg'
import lightyear from '../assets/images/new/lightyear.jpg'
import morbius from '../assets/images/new/morbius.jpg'


const New = () => {
    return (
        <div>
            <Container>
                <br />
                <br />
                <h1 className='text-white'>NEW MOVIES</h1>
                <Row>
                    <Col md={4} className='movieWrapper' id='new'>
                        <Card className="bg-dark movieImage">
                            <Image src={dune} alt="dune" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>DUNE</Card.Title>
                                        <Card.Text className='text-left'>
                                        Perjalanan pahlawan mitis dan emosional, Dune"menceritakan kisah Paul Atreides, seorang pemuda cerdas dan berbakat yang lahir dalam takdir besar di luar pemahamannya, yang harus melakukan perjalanan ke planet paling berbahaya di alam semesta untuk memastikan masa depannya.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={everything} alt="everything" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>EVERYTHING EVERYWHERE ALL AT ONCE</Card.Title>
                                        <Card.Text className='text-left'>
                                        Everything Everywhere All At Once adalah petualangan yang penuh aksi, sci-fi yang lucu dan berjiwa besar tentang seorang wanita Cina-Amerika, Seorang imigran Tiongkok terbawa dalam petualangan luar biasa, di mana dia sendiri yang dapat menyelamatkan dunia dengan menjelajahi alam semesta lain yang terhubung dengan kehidupan yang bisa dia jalani.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={infinite} alt="infinite" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>INFINITE STORM</Card.Title>
                                        <Card.Text className='text-left'>
                                        Mengisahkan seorang pendaki bernama Pam Bales. Ketika dia mendaki, tiba-tiba terjadi badai salju yang hebat. Di tengah badai, Pam bertemu dengan John, seorang pria yang bertingkah aneh. Akhirnya mereka berdua berusaha turun gunung dan mencari tempat aman.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={joker} alt="joker" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>JOKER</Card.Title>
                                        <Card.Text className='text-left'>
                                        Arthur Fleck, seorang badut pesta, hidup dalam keadaan sulit bersama ibunya yang sakit-sakitan. Karena orang-orang menganggapnya aneh, ia memutuskan untuk berubah menjadi jahat dan membuat kekacauan.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={lightyear} alt="lightyear" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>LIGHTYEAR (2022)</Card.Title>
                                        <Card.Text className='text-left'>
                                        Misi luar angkasa Buzz Lightyear (Chris Evans) menjadi serba salah ketika dia membuat kesalahan besar. Akibatnya, dia dan krunya terdampar di planet asing selama setahun. Mereka terus gigih mencari solusi untuk keluar dari planet ini.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={morbius} alt="morbius" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>MORBIUS</Card.Title>
                                        <Card.Text className='text-left'>
                                        Ahli biokimia Michael Morbius (Jared Leto) mencoba menyembuhkan dirinya sendiri dari penyakit darah langka, namun secara tidak sengaja ia menginfeksi tubuhnya dan berubah jadi mahluk yang menyerupai vampir.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default New