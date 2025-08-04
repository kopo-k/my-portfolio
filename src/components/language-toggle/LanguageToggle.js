// LanguageToggle.js - 言語切り替えロジック専用モジュール
import { translations } from './translations.js';

export class LanguageManager {
  constructor() {
    this.currentLang = this.getCurrentLanguage();
    this.initializeElements();
  }

  // ローカルストレージから現在の言語を取得
  getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
  }

  // 言語をローカルストレージに保存
  setLanguage(lang) {
    localStorage.setItem('language', lang);
    this.currentLang = lang;
  }

  // 翻訳キーからテキストを取得
  translate(key) {
    return translations[this.currentLang][key] || translations['en'][key] || key;
  }

  // DOM要素を初期化
  initializeElements() {
    this.button = document.getElementById('language-toggle');
    this.flagElement = document.getElementById('current-flag');
    this.textElement = document.getElementById('current-lang-text');
    
    if (this.button && this.flagElement && this.textElement) {
      this.setupEventListeners();
      this.updateButtonDisplay();
      this.updateAllTexts();
    } else {
      // 要素が見つからない場合は再試行
      setTimeout(() => this.initializeElements(), 50);
    }
  }

  // イベントリスナーを設定
  setupEventListeners() {
    if (this.button) {
      this.button.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });
      console.log('Language toggle event listener added');
    }
  }

  // ボタンの表示を更新
  updateButtonDisplay() {
    if (this.flagElement && this.textElement) {
      if (this.currentLang === 'ja') {
        this.flagElement.textContent = '🇯🇵';
        this.textElement.textContent = 'JP';
      } else {
        this.flagElement.textContent = '🇺🇸';
        this.textElement.textContent = 'EN';
      }
    }
  }

  // アニメーション付きでボタンの表示を更新
  updateButtonWithAnimation() {
    if (this.flagElement && this.textElement) {
      // アニメーション開始
      this.flagElement.classList.add('flag-swap');
      this.textElement.classList.add('text-slide');
      
      setTimeout(() => {
        // 新しい内容に更新
        if (this.currentLang === 'ja') {
          this.flagElement.textContent = '🇯🇵';
          this.textElement.textContent = 'JP';
        } else {
          this.flagElement.textContent = '🇺🇸';
          this.textElement.textContent = 'EN';
        }
        
        // アニメーションクラスを削除
        setTimeout(() => {
          this.flagElement.classList.remove('flag-swap');
          this.textElement.classList.remove('text-slide');
        }, 100);
      }, 200);
    }
  }

  // ページ内の全翻訳対象テキストを更新
  updateAllTexts() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = this.translate(key);
      } else {
        element.textContent = this.translate(key);
      }
    });
  }

  // 言語を切り替える
  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ja' : 'en';
    this.setLanguage(newLang);
    this.updateButtonWithAnimation();
    
    // アニメーション完了後にテキストを更新
    setTimeout(() => {
      this.updateAllTexts();
    }, 300);
    
    // カスタムイベントを発火
    this.dispatchLanguageChangeEvent(newLang);
  }

  // 言語変更イベントを発火
  dispatchLanguageChangeEvent(language) {
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language } 
    }));
  }
}

// 初期化関数
export function initLanguageToggle() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new LanguageManager();
    });
  } else {
    new LanguageManager();
  }
}

// 自動初期化
initLanguageToggle();

// グローバルに露出（デバッグ用）
window.LanguageManager = LanguageManager;