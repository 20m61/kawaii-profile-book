import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* ヘッダーセクション */}
      <header className={styles.heroSection}>
        <nav className={styles.navigation}>
          <div className={styles.logo}>NEXT NINE</div>
          <ul className={styles.navMenu}>
            <li>プラン</li>
            <li>実績</li>
            <li>お客様の声</li>
            <li className={styles.ctaNav}>無料相談</li>
          </ul>
        </nav>
        <div className={styles.heroContent}>
          <h1>プロのサポートで、<br/>音楽の夢を現実に</h1>
          <p>一人で悩むより、プロと一緒に進む方が夢への近道です</p>
          <div className={styles.ctaContainer}>
            <button className={styles.primaryCta}>今すぐ無料相談</button>
            <p className={styles.offerText}>初回相談完全無料</p>
          </div>
        </div>
      </header>

      {/* サービス紹介セクション */}
      <section className={styles.serviceIntro}>
        <h2>音楽活動の悩み、一緒に解決しましょう</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>楽曲制作サポート</h3>
            <p>プロのアドバイスで作曲・編曲のクオリティを向上させます</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>レコーディング指導</h3>
            <p>録音技術から機材選びまで、実践的なスキルを身につけます</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>音楽ビジネス戦略</h3>
            <p>ライブ活動や配信戦略で音楽を仕事にするためのノウハウ</p>
          </div>
        </div>
      </section>

      {/* プランセクション */}
      <section className={styles.plansSection}>
        <h2>あなたに最適なプランを選択</h2>
        <div className={styles.plansGrid}>
          <div className={styles.planCard}>
            <h3>ベーシック</h3>
            <div className={styles.planPrice}>¥5,000<span>/月</span></div>
            <ul className={styles.planFeatures}>
              <li>月1回のオンライン相談</li>
              <li>楽曲フィードバック</li>
              <li>基本的な制作アドバイス</li>
            </ul>
            <button className={styles.planButton}>選択する</button>
          </div>
          <div className={`${styles.planCard} ${styles.featured}`}>
            <h3>スタンダード</h3>
            <div className={styles.planPrice}>¥10,000<span>/月</span></div>
            <ul className={styles.planFeatures}>
              <li>月2回のオンライン相談</li>
              <li>詳細な楽曲分析</li>
              <li>制作・レコーディング指導</li>
              <li>音楽ビジネス相談</li>
            </ul>
            <button className={styles.planButton}>選択する</button>
          </div>
          <div className={styles.planCard}>
            <h3>プレミアム</h3>
            <div className={styles.planPrice}>¥20,000<span>/月</span></div>
            <ul className={styles.planFeatures}>
              <li>週1回のオンライン相談</li>
              <li>楽曲共同制作</li>
              <li>スタジオレコーディング同行</li>
              <li>ライブ・配信戦略サポート</li>
              <li>業界コネクション紹介</li>
            </ul>
            <button className={styles.planButton}>選択する</button>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className={styles.testimonials}>
        <h2>お客様の声</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialText}>
              「楽曲制作で行き詰まっていましたが、的確なアドバイスのおかげで新しい音楽スタイルを見つけることができました。」
            </div>
            <div className={styles.customerInfo}>
              <div className={styles.customerAvatar}>A</div>
              <div>
                <div className={styles.customerName}>田中 明子</div>
                <div className={styles.customerTitle}>シンガーソングライター</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialText}>
              「レコーディング技術が飛躍的に向上し、自宅でもプロレベルの音源を作れるようになりました。」
            </div>
            <div className={styles.customerInfo}>
              <div className={styles.customerAvatar}>B</div>
              <div>
                <div className={styles.customerName}>佐藤 健太</div>
                <div className={styles.customerTitle}>バンドメンバー</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialText}>
              「音楽ビジネスの知識を得て、ライブ活動が収益につながるようになりました。夢が現実になってきています。」
            </div>
            <div className={styles.customerInfo}>
              <div className={styles.customerAvatar}>C</div>
              <div>
                <div className={styles.customerName}>山田 美香</div>
                <div className={styles.customerTitle}>インディーズアーティスト</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最終CTAセクション */}
      <section className={styles.finalCta}>
        <div className={styles.ctaContent}>
          <h2>音楽の夢への第一歩を踏み出しませんか？</h2>
          <p>プロの音楽家があなたの可能性を最大限に引き出します</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryCta}>今すぐ無料相談</button>
            <button className={styles.secondaryCta}>詳細を見る</button>
          </div>
        </div>
      </section>
    </div>
  );
}
