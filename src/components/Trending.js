import {Card, Container, Row, Col, Image, Nav} from 'react-bootstrap'
import antman from '../assets/images/trending/antman.jpg'
import avenger from '../assets/images/trending/avenger.jpg'
import batman from '../assets/images/trending/batman.jpg'
import robinhood from '../assets/images/trending/robinhood.jpg'
import spiderman from '../assets/images/trending/spiderman-cover.jpg'
import superman from '../assets/images/trending/superman.jpg'


const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <br />
                <h1 className='text-white' id='trending'>TRENDING MOVIES</h1>
                <Nav.Link className='text-white text-end' href='/'>Home</Nav.Link>
                <Row>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={antman} alt="antman" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>ANT-MAN</Card.Title>
                                        <Card.Text className='text-left'>
                                        Dengan setelan kostum berkemampuan luar biasa untuk mengecilkan diri dalam skala ekstrim dan meningkatkan kekuatan, Scott yang dulu adalah seorang pencuri ahli, kini berubah menjadi sosok superhero..
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={avenger} alt="avengers" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>AVENGERS : ENDGAME</Card.Title>
                                        <Card.Text className='text-left'>
                                        Melanjutkan Avengers Infinity War, dimana kejadian setelah Thanos berhasil mendapatkan semua infinity stones dan memusnahkan 50% semua mahluk hidup di alam semesta. Akankah para Avengers berhasil mengalahkan Thanos?
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={batman} alt="batman" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>THE DARK KNIGHT</Card.Title>
                                        <Card.Text className='text-left'>
                                        Batman memiliki musuh baru, Joker, otak kriminal yang berambisi menghancurkan Gotham City. Bersama Gordon dan Harvey Dent, Batman harus berjuang untuk menghentikannya sebelum semuanya terlambat.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={robinhood} alt="mission imposible" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>ROBIN HOOD</Card.Title>
                                        <Card.Text className='text-left'>
                                        Robin Hood, Seorang tentara yang menemukan dan muak dengan pejabat korup sementara rakyat dalam keadaan sengsara.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={spiderman} alt="mission imposible" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>SPIDER-MAN : NO WAY HOME</Card.Title>
                                        <Card.Text className='text-left'>
                                        Pertama kalinya dalam sejarah layar lebar Spider-Man, identitas asli dari pahlawan nan ramah ini terbongkar, sehingga membuat tanggung jawabnya sebagai seorang berkekuatan super berbenturan dengan kehidupan normalnya, dan menempatkan semua orang terdekatnya dalam posisi paling terancam..
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>   
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark movieImage">
                            <Image src={superman} alt="mission imposible" className='trendingImages'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>MAN OF STEEL</Card.Title>
                                        <Card.Text className='text-left'>
                                        Dipaksa untuk menghadapi rahasia tentang asal-usul galaxi nya, Superman kini belajar untuk membela planet bumi, ketika diserang oleh makhluk-makhluk asing yang berasal dari bangsanya sendiri.
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

export default Trending