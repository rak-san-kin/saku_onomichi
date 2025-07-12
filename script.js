$(document).ready(function () {
  // アコーディオンの初期状態を設定
  $(".accordion-item").each(function () {
    const accordionItem = $(this);
    const buttonImg = accordionItem.find(".accordion-button");

    console.log("初期化:", accordionItem.hasClass("is-open"), buttonImg.length);

    if (accordionItem.hasClass("is-open")) {
      // 開いている状態では閉じるボタンを表示
      buttonImg.attr("src", "frame-49_close.png");
      console.log("closeボタンに設定:", buttonImg.attr("src"));
    } else {
      // 閉じている状態では開くボタンを表示
      buttonImg.attr("src", "frame-49_open.png");
      console.log("openボタンに設定:", buttonImg.attr("src"));
    }
  });

  // ハンバーガーメニュー機能
  $("#js-drawer-icon").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("is-checked");
    $("#js-drawer-content").toggleClass("active");
  });

  // スムーススクロール
  jQuery('a[href^="#"]').on("click", function (e) {
    const speed = 300;
    const id = jQuery(this).attr("href");
    const target = jQuery("#" == id ? "html" : id);
    const position = jQuery(target).offset().top;
    jQuery("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
  });

  // ページトップボタン
  jQuery(window).on("scroll", function () {
    if (100 < jQuery(window).scrollTop()) {
      jQuery("#js-pagetop").addClass("is-show");
    } else {
      jQuery("#js-pagetop").removeClass("is-show");
    }
  });

  // ドロワーメニュー内のリンクをクリックした時にメニューを閉じる
  $("#js-drawer-content a").on("click", function () {
    $("#js-drawer-icon").removeClass("is-checked");
    $("#js-drawer-content").removeClass("active");
  });

  // ラジオボタンとチェックボックスのクリック処理
  // ラジオボタンのラベルクリックでの動作を確実にする
  $(".radio-label").on("click", function (e) {
    const radioInput = $(this).find(".radio-input");
    if (radioInput.length) {
      radioInput.prop("checked", true);
      // 同じname属性の他のラジオボタンのチェックを外す
      $(`input[name="${radioInput.attr("name")}"]`)
        .not(radioInput)
        .prop("checked", false);
    }
  });

  // チェックボックスのラベルクリックでの動作を確実にする
  $(".checkbox-label").on("click", function (e) {
    // リンクのクリックの場合は処理しない
    if ($(e.target).is("a")) {
      return;
    }

    const checkboxInput = $(this).find(".checkbox-input");
    if (checkboxInput.length) {
      checkboxInput.prop("checked", !checkboxInput.prop("checked"));
    }
  });

  // プライバシーポリシーリンクのクリック処理
  $(".privacy-link").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    // プライバシーポリシーページへの遷移（実際のURLに変更してください）
    window.open("#", "_blank");
  });

  // アコーディオン機能
  $(".js-accordion").on("click", function () {
    const accordionItem = $(this).closest(".accordion-item");
    const buttonImg = $(this).find(".accordion-button");

    console.log("クリック前:", accordionItem.hasClass("is-open"));
    accordionItem.toggleClass("is-open");
    console.log("クリック後:", accordionItem.hasClass("is-open"));

    // ボタン画像を切り替え（開いている時は閉じるボタン、閉じている時は開くボタン）
    if (accordionItem.hasClass("is-open")) {
      buttonImg.attr("src", "frame-49_close.png"); // 開いている時は閉じるボタン
      console.log("closeボタンに変更:", buttonImg.attr("src"));
    } else {
      buttonImg.attr("src", "frame-49_open.png"); // 閉じている時は開くボタン
      console.log("openボタンに変更:", buttonImg.attr("src"));
    }
  });

  // Swiper スライダー機能
  const slider = new Swiper(".slider", {
    // 自動再生は無効
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".slider .swiper-button-next",
      prevEl: ".slider .swiper-button-prev",
    },
    pagination: {
      el: ".slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      426: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // Swiper spots-slider機能（ループモード）
  const spotsSlider = new Swiper(".spots-slider", {
    // 自動再生は無効
    loop: true, // ループモード有効
    slidesPerView: "auto",
    spaceBetween: 32, // 32pxの間隔
    allowTouchMove: true, // タッチ操作を有効
    grabCursor: true, // カーソルを手の形に
    centeredSlides: false, // 中央揃え無効
    navigation: {
      nextEl: ".spots-slider .swiper-button-next",
      prevEl: ".spots-slider .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: false,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 32, // PC時の間隔
        centeredSlides: false,
      },
    },
  });

  // Swiper about-slider機能（無限スクロール）
  const aboutSlider = new Swiper(".about-slider", {
    // 自動再生を有効
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 3000,
    loop: true,
    loopAdditionalSlides: 10,
    slidesPerView: "auto",
    spaceBetween: 10,
    allowTouchMove: false,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 8,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });

  // Prize Modal機能
  const prizeData = {
    1: {
      title: "海街洋菓子店スイーツセット",
      image: "Rectangle-1-pc.png",
      description:
        "尾道の老舗洋菓子店「海街洋菓子店」の人気スイーツをセットにしました。地元で愛される伝統の味をお楽しみください。焼き菓子やケーキなど、厳選されたスイーツが詰まったお得なセットです。",
    },
    2: {
      title: "ねこねこグッズセット",
      image: "Rectangle-2-pc.png",
      description:
        "尾道といえば猫の街！可愛い猫をモチーフにしたオリジナルグッズセットです。猫好きにはたまらない、キュートなアイテムが盛りだくさん。日常使いから記念品まで、様々なシーンでお楽しみいただけます。",
    },
    3: {
      title: "尾道ラーメンセット",
      image: "Rectangle-3.png",
      description:
        "尾道の名物「尾道ラーメン」をご自宅でお楽しみいただけるセットです。醤油ベースのあっさりとした味わいに、背脂が特徴的な尾道ラーメンの本格的な味をお届けします。",
    },
    4: {
      title: "おうちで喫茶店セット",
      image: "Rectangle-4.png",
      description:
        "ご自宅で本格的なカフェ体験をお楽しみいただけるセットです。厳選されたコーヒー豆とお菓子、そして素敵な雑貨が入っています。おうち時間を豊かに彩る特別なひとときをお過ごしください。",
    },
    5: {
      title: "工房尾道帆布オリジナルトート",
      image: "Rectangle-5.png",
      description:
        "尾道の老舗帆布メーカー「工房尾道帆布」が手がけるオリジナルトートバッグです。丈夫で長持ちする帆布素材を使用し、シンプルながらも上品なデザインに仕上げました。日常使いにぴったりの一品です。",
    },
  };

  // モーダルを開く
  $(".prize__grid--clickable").on("click", function () {
    const prizeId = $(this).data("prize");
    const prize = prizeData[prizeId];

    if (prize) {
      $("#prizeModal .prize-modal__image")
        .attr("src", prize.image)
        .attr("alt", prize.title);
      $("#prizeModal .prize-modal__title").text(prize.title);
      $("#prizeModal .prize-modal__description").text(prize.description);
      $("#prizeModal").fadeIn(300);
      $("body").addClass("modal-open");
    }
  });

  // モーダルを閉じる
  function closeModal() {
    $("#prizeModal").fadeOut(300);
    $("body").removeClass("modal-open");
  }

  // 閉じるボタンでモーダルを閉じる
  $(".prize-modal__close").on("click", closeModal);

  // オーバーレイクリックでモーダルを閉じる
  $(".prize-modal__overlay").on("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  // ESCキーでモーダルを閉じる
  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && $("#prizeModal").is(":visible")) {
      closeModal();
    }
  });

  // フォームバリデーション機能
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // デフォルトの送信動作を停止

      // バリデーションチェック
      if (validateForm()) {
        // バリデーション成功時の処理
        submitForm();
      }
    });
  }

  // バリデーション関数
  function validateForm() {
    const form = document.getElementById("contactForm");

    // ブラウザ標準のバリデーションをチェック
    if (!form.checkValidity()) {
      // バリデーションエラーがある場合、エラーメッセージを表示
      showValidationErrors(form);
      return false;
    }

    // 追加のカスタムバリデーション
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const inquiryType = document.getElementById("inquiry-type").value;
    const message = document.getElementById("message").value.trim();
    const privacyPolicy = document.querySelector(
      'input[name="privacy-policy"]'
    ).checked;

    // 名前の長さチェック
    if (name.length < 2) {
      alert("お名前は2文字以上で入力してください。");
      document.getElementById("name").focus();
      return false;
    }

    // メールアドレスの形式チェック（より厳密）
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("正しいメールアドレスを入力してください。");
      document.getElementById("email").focus();
      return false;
    }

    // メッセージの長さチェック
    if (message.length < 10) {
      alert("メッセージは10文字以上で入力してください。");
      document.getElementById("message").focus();
      return false;
    }

    // プライバシーポリシー同意チェック
    if (!privacyPolicy) {
      alert("プライバシーポリシーに同意してください。");
      document.querySelector('input[name="privacy-policy"]').focus();
      return false;
    }

    return true;
  }

  // ブラウザ標準のバリデーションエラーを表示
  function showValidationErrors(form) {
    const invalidElements = form.querySelectorAll(":invalid");

    if (invalidElements.length > 0) {
      const firstInvalid = invalidElements[0];

      // エラーメッセージを作成
      let errorMessage = "入力内容に不備があります：\n\n";

      invalidElements.forEach((element) => {
        const label =
          element.previousElementSibling?.querySelector(".form-label")
            ?.textContent ||
          element.closest(".form-group")?.querySelector(".form-label")
            ?.textContent ||
          element.name;

        if (element.validity.valueMissing) {
          errorMessage += `• ${label}は必須項目です\n`;
        } else if (element.validity.typeMismatch) {
          errorMessage += `• ${label}の形式が正しくありません\n`;
        } else if (element.validity.patternMismatch) {
          errorMessage += `• ${label}の形式が正しくありません\n`;
        }
      });

      alert(errorMessage);
      firstInvalid.focus();
    }
  }

  // フォーム送信処理
  function submitForm() {
    // 送信ボタンを無効化（重複送信防止）
    const submitButton = document.querySelector(
      '#contactForm button[type="submit"]'
    );
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "送信中...";

    // 実際の送信処理をシミュレート（3秒後に完了）
    setTimeout(() => {
      // 送信成功のアラート表示
      alert(
        "お問い合わせありがとうございました！\n\n送信が完了しました。\n3営業日以内にご返信いたします。"
      );

      // フォームをリセット
      document.getElementById("contactForm").reset();

      // 送信ボタンを元に戻す
      submitButton.disabled = false;
      submitButton.textContent = originalText;

      // ページトップにスクロール
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 3000);
  }

  // リアルタイムバリデーション（入力時のフィードバック）
  const formInputs = document.querySelectorAll(
    "#contactForm input, #contactForm select, #contactForm textarea"
  );

  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });

    input.addEventListener("input", function () {
      if (this.classList.contains("error")) {
        validateField(this);
      }
    });
  });

  // 個別フィールドのバリデーション
  function validateField(field) {
    const errorClass = "error";

    // エラークラスを削除
    field.classList.remove(errorClass);

    // 既存のエラーメッセージを削除
    const existingError = field.parentNode.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    // バリデーションチェック
    if (!field.checkValidity()) {
      field.classList.add(errorClass);
      showFieldError(field, field.validationMessage);
    } else {
      // カスタムバリデーション
      const value = field.value.trim();

      if (field.id === "name" && value.length > 0 && value.length < 2) {
        field.classList.add(errorClass);
        showFieldError(field, "お名前は2文字以上で入力してください");
      } else if (
        field.id === "message" &&
        value.length > 0 &&
        value.length < 10
      ) {
        field.classList.add(errorClass);
        showFieldError(field, "メッセージは10文字以上で入力してください");
      }
    }
  }

  // フィールドエラーメッセージ表示
  function showFieldError(field, message) {
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    field.parentNode.appendChild(errorElement);
  }
});
