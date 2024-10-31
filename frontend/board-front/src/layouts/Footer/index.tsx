import React from 'react'
import './style.css'

// component : Footer 컴포넌트
export default function Footer() {

  // event handler : 인스타 아이콘 버튼 클릭 이벤트 처리
  const onInstaIconClickHandler = () => {
    window.open('https://www.instagram.com');
  }

  // event handler : 네이버 블로그 아이콘 버튼 클릭 이벤트 처리
  const onNaverBlogIconClickHandler = () => {
    window.open('https://blog.naver.com');
  }

  return (
    <div id='footer'>
      <div className='footer-container'>
        <div className='footer-top'>
          <div className='footer-logo-box'>
            <div className='icon-box'>
              <div className='icon logo-light-icon'></div>
            </div>
            <div className='footer-logo-text'>{'Hoons Board'}</div>
          </div>
          <div className='footer-link-box'>
            <div className='footer-email-link'>{'asdmf@gmail.com'}</div>
            <div className='icon-button' onClick={onInstaIconClickHandler}>
              <div className='icon insta-icon'></div>
            </div>
            <div className='icon-button' onClick={onNaverBlogIconClickHandler}>
              <div className='icon naver-blog-icon'></div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-copyright'>{'Copyright @ 2022 Jukoyakki. All Rights Reserved.'}</div>
        </div>
      </div>
    </div>
  )
}
