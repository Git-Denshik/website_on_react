import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import Hero from '../img/hero.png'
import Phone from '../img/phone.png'
import Mail from '../img/mail.svg'
import ImgOne from '../img/1.png'
import ImgTwo from '../img/2.png'
import ImgFree from '../img/3.png'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='bg-home mx-auto'>
                    <Container>
                        <Row className='m-auto'>
                            <Col lg={6}>
                                <h1 className='title'>Современное решение рутинных задач бизнеса</h1>
                                <p className='text'>Создай свою страницу сайта и начни принимать оплаты в 1 клик</p>
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
                            <p className='text'>
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
            </>
        )
    }
}