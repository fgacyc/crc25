import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">


      <div className="hero-image">
        <img src="/titles/title-1.png" alt="教会复兴特会" />
      </div>
      <div className="arch-container">

        <div className="arch-content">
          <div className="subtitle-image">
            <img src="/titles/subtitle-1.png" alt="欢迎加入复兴行列" />
          </div>
          <ul className="action-list">


            <li className="main-description">欢迎参加《教会复兴特会》！本次特会旨在联合各地区教会，共同推进福音事工，培养门徒，并训练主的精兵。我们致力于为华人教会建立坚固的根基，并通过实际的行动和方案完成大使命！</li>
            <li className="section-intro">在本次特会中，我们将围绕三大核心主题展开深入探讨：</li>
            <li className="section-item">1. 个人复兴 —— 我们将一起探讨如何成为坚强的基督徒，建立在神话语根基的脚步。透过圣灵的感动，你将经历属灵生命的复兴和更新。</li>
            <li className="section-item">2. 重燃敬拜和祷告的生命 —— 我们将一起深化对敬拜和祷告的理解，并在神的同在中帮助你重获前进的动力。</li>
            <li className="section-item">3. 建造健康的教会 —— 我们将分享如何有效地领导并推动教会复兴运动，通过高质量的小组和聚会，即使在逆境中也能帮助你的教会经历倍增的恩惠。</li>
            <li className="conclusion">我们坚信，通过本次特会的内容丰富和深入的交流，我们能够一起建造一个更加强大和健康的教会，并将福音传遍全地。再次欢迎你加入复兴的行列，一起得着至高的大能，让世界见证耶稣的荣耀和美好。</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero; 