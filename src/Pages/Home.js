import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import Hero from '../img/hero.png'
import Phone from '../img/phone.png'
import Mail from '../img/mail.svg'
import ImgOne from '../img/1.png'
import ImgTwo from '../img/2.png'
import ImgFree from '../img/3.png'
import ImgFour from '../img/ImgOne.png'
import ImgFive from '../img/ImgTwo.png'
import ImgSix from '../img/ImgFree.png'
import ImgSeven from '../img/X5.png'
import ImgEig from '../img/X6.png'
import Social from '../img/social.png'
import logo from '../img/logo.png'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='bg-home mx-auto'>
                    <Container>
                        <Row className='m-auto'>
                            <Col lg={6}>
                                <h1 className='title'>Современное решение рутинных задач бизнеса</h1>
                                <p className='text' id="text-modile">Создай свою страницу сайта и начни принимать оплаты в 1 клик</p>
                                <Button variant='success '>Создать страницу</Button>
                                <div className='phone'>
                                    <img
                                        src={Phone}
                                        width="42px"
                                        height="34px"
                                        alt='mobile'
                                    />
                                    <a className='link-hero' href='tel:+77064202101'>+7 (706) 420-21-01</a>
                                    <img
                                        src={Mail}
                                        width="42px"
                                        height="34px"
                                        alt='mobile'
                                        className='marg-left'
                                    />
                                    <a className='link-hero' href='mailto:info@exsample.ru'>info@exsample.ru</a>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <img
                                    src={Hero}
                                    width="100%"
                                    height="402px"
                                    className='hero-top'
                                    alt='mobile'
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='container-bg'>
                    <Container>
                        <Row>
                            <h2 className='title'>Daru Link</h2>
                            <p className='text body-width'>
                                Daru Link — это единое место, где вы можете создать собственный сайт,
                                выбрав ему категорию бизнеса, подключить к нему онлайн-оплату или календарь
                                записи всего 1 клик, не волноваться о налоговых отчетностях и прочих
                                бюрократичных моментах
                            </p>
                            <ul className='card-group'>
                                <li className='card-group__item'>
                                    <img
                                        src={ImgOne}
                                        alt=""
                                    />
                                    <h3 className='title-card'>Экономия</h3>
                                    <p className='text-card'>Не переплачивай другим, создайте свою страницу от $40 в месяц</p>
                                </li>
                                <li className='card-group__item'>
                                    <img
                                        src={ImgTwo}
                                        alt=""
                                    />
                                    <h3 className='title-card'>Удобство</h3>
                                    <p className='text-card'>Понятный и простой интерфейс не затруднит работу с сервисом</p>
                                </li>
                                <li className='card-group__item'>
                                    <img
                                        src={ImgFree}
                                        alt=""
                                    />
                                    <h3 className='title-card'>Возможность</h3>
                                    <p className='text-card'>Подключайте свой сайт к Kaspi.kz , 1C и Kazpost и контролируйте все в Daru</p>
                                </li>
                            </ul>
                        </Row>
                    </Container>
                </div>

                <div className='container-free bg-home'>
                    <Container>
                        <Row>
                            <h2 className='title'>Возможность</h2>
                            <p className='text'>
                                Интегрируйте свой сайт с магазином Kaspi.kz, 1C и Kazpost для
                                автоматизации всех процессов в одном месте. На основе 1С ваш
                                интернет-магазин будет подгружать данные о товаре
                            </p>
                            <ul className='WrapperLogo'>
                                <li className='WrapperLogo__item'>
                                    <img
                                        src={ImgFour}
                                        alt=''
                                    />
                                </li>
                                <li className='WrapperLogo__item'>
                                    <img
                                        src={ImgFive}
                                        alt=''
                                    />
                                </li>
                                <li className='WrapperLogo__item'>
                                    <img
                                        src={ImgSix}
                                        alt=''
                                    />
                                </li>
                            </ul>
                        </Row>
                    </Container>
                </div>

                <div className='container-bg body-padding'>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <h1 className='title'>Удобство</h1>
                                <p className='text body-width' id="text-modile">
                                    Создавайте индивидуальный дизайн страницы. Фантазируйте и
                                    вооплощайте задуманное в реальность. Удобный и понтный
                                    интерфейс не затруднит работу с сервисом
                                </p>
                                <Button className='button-bg'>Дизайн в 1 клик</Button>
                            </Col>
                            <Col lg={6}>
                                <ul className='wrap-img'>
                                    <li className='wrap-ite__item wrap-ite__item--top'>
                                        <img
                                            src={ImgEig}
                                            width="100%"
                                            alt=''
                                        />
                                    </li>
                                    <li className='wrap-ite__item'>
                                        <img
                                            src={ImgSeven}
                                            alt=''
                                        />
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='bg-home container-pad'>
                    <Container>
                        <Row>
                            <h2 className='title'>Дешевле чем заказывать</h2>
                            <p className='text body-width'>
                                Создайте свой сайт со всеми расширениями дешевле, чем заказывать у фрилансеров
                            </p>
                            <ul className='card-group'>
                                <li className='card-group__item'>
                                    <h3 className='title-card'>“Альт”</h3>
                                    <ul className='list'>
                                        <li>Собственная страница</li>
                                        <li>Редактирование дизайна</li>
                                        <li>Подключение соц.сети</li>
                                        <li>Форма для заявок клиентов</li>
                                        <li>Поддержка 24/7</li>
                                        <li>Прием платежей</li>
                                        <li>Интеграция 1С и Kazpost</li>
                                        <li>Интеграция Kaspi</li>
                                    </ul>
                                    <Button className='bg-btn-one'>$29/месяц</Button>
                                </li>
                                <li className='card-group__item'>
                                    <h3 className='title-card'>“Команд”</h3>
                                    <ul className='list'>
                                        <li>Собственная страница</li>
                                        <li>Редактирование дизайна</li>
                                        <li>Подключение соц.сети</li>
                                        <li>Форма для заявок клиентов</li>
                                        <li>Поддержка 24/7</li>
                                        <li>Прием платежей</li>
                                        <li>Интеграция 1С и Kazpost</li>
                                        <li>Интеграция Kaspi</li>
                                    </ul>
                                    <Button className='bg-btn-two'>$59/месяц</Button>
                                </li>
                                <li className='card-group__item'>
                                    <h3 className='title-card'>“Дэлит”</h3>
                                    <ul className='list'>
                                        <li>Собственная страница</li>
                                        <li>Редактирование дизайна</li>
                                        <li>Подключение соц.сети</li>
                                        <li>Форма для заявок клиентов</li>
                                        <li>Поддержка 24/7</li>
                                        <li>Прием платежей</li>
                                        <li>Интеграция 1С и Kazpost</li>
                                        <li>Интеграция Kaspi</li>
                                    </ul>
                                    <Button className='bg-btn-free'>$89/месяц</Button>
                                </li>
                            </ul>
                        </Row>
                    </Container>
                </div>

                <div className='container-free container-bg'>
                    <Container>
                        <Row>
                            <h2 className='title'>Обновления</h2>
                            <p className='text'>
                                Следите за свежими обновлениями сервиса в социальных сетях и на официальных страницах Daru Link
                            </p>
                            <img 
                            src={Social}
                            id='img-container'
                            />
                        </Row>
                    </Container>
                </div>

                <div className='bg-home footer'>
                    <Container>
                        <Row>
                            <Col xl={4}>
                            <p>Политика конфедациальности</p>
                            </Col>
                            <Col xl={4}>
                            <ul className='wrapper-footer'>
                                <li className='wrapper-footer__item'>
                                    <img  
                                    src={logo}
                                    />
                                    <p>© TOO “Дару Линк” все права защищены</p>
                                </li>
                            </ul>
                            </Col>
                            <Col xl={4}>
                            <p>Пользовательское соглашение</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}