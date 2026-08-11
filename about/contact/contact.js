document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "contact-form"
            );

        if (!form) {
            return;
        }


        const name =
            document.getElementById(
                "contact-name"
            );

        const email =
            document.getElementById(
                "contact-email"
            );

        const message =
            document.getElementById(
                "contact-message"
            );

        const consent =
            document.getElementById(
                "contact-consent"
            );

        const submitButton =
            document.getElementById(
                "contact-submit"
            );

        const formMessage =
            document.getElementById(
                "contact-form-message"
            );


        form.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                /* =========================
                   清除舊訊息
                ========================= */

                clearErrors();


                /* =========================
                   前端驗證
                ========================= */

                let valid = true;


                if (!name.value.trim()) {

                    showError(
                        "contact-name-error",
                        "請填寫姓名。"
                    );

                    valid = false;
                }


                if (!email.value.trim()) {

                    showError(
                        "contact-email-error",
                        "請填寫 Email。"
                    );

                    valid = false;

                }
                else if (
                    !isValidEmail(
                        email.value.trim()
                    )
                ) {

                    showError(
                        "contact-email-error",
                        "請輸入正確的 Email 格式。"
                    );

                    valid = false;
                }


                if (!message.value.trim()) {

                    showError(
                        "contact-message-error",
                        "請填寫聯絡事項。"
                    );

                    valid = false;

                }
                else if (
                    message.value.trim().length > 3000
                ) {

                    showError(
                        "contact-message-error",
                        "聯絡事項不可超過 3000 字。"
                    );

                    valid = false;
                }


                if (!consent.checked) {

                    showError(
                        "contact-consent-error",
                        "請勾選同意提供聯絡資料。"
                    );

                    valid = false;
                }


                if (!valid) {
                    return;
                }



                /* =========================
                   防止重複送出
                ========================= */

                submitButton.disabled = true;

                submitButton.textContent =
                    "傳送中...";


                formMessage.textContent =
                    "資料傳送中，請稍候。";

                formMessage.className =
                    "contact-form-message is-visible is-info";


                try {


                    /* =========================
                       建立 FormData
                    ========================= */

                    const formData =
                        new FormData(form);



                    /* =========================
                       呼叫 Web3Forms
                    ========================= */

                    const response =
                        await fetch(
                            "https://api.web3forms.com/submit",
                            {
                                method: "POST",
                                body: formData
                            }
                        );


                    const result =
                        await response.json();



                    /* =========================
                       成功
                    ========================= */

                    if (
                        response.ok &&
                        result.success
                    ) {

                        formMessage.textContent =
                            "您的訊息已成功送出，謝謝您的聯絡。";

                        formMessage.className =
                            "contact-form-message is-visible is-success";


                        form.reset();


                        /*
                         * 成功後把焦點放到訊息區，
                         * 讓鍵盤與輔助科技使用者
                         * 可以知道結果。
                         */

                        formMessage.setAttribute(
                            "tabindex",
                            "-1"
                        );

                        formMessage.focus();

                    }


                    /* =========================
                       Web3Forms 回傳失敗
                    ========================= */

                    else {

                        const errorMessage =
                            result.message ||
                            "目前無法送出訊息，請稍後再試。";


                        formMessage.textContent =
                            errorMessage;

                        formMessage.className =
                            "contact-form-message is-visible is-error";

                    }

                }


                /* =========================
                   網路或其他錯誤
                ========================= */

                catch (error) {

                    console.error(
                        "Contact form error:",
                        error
                    );


                    formMessage.textContent =
                        "目前無法連線至寄信服務，請稍後再試，或直接寄信至 quiltfriendship@gmail.com。";

                    formMessage.className =
                        "contact-form-message is-visible is-error";

                }


                /* =========================
                   恢復按鈕
                ========================= */

                finally {

                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        "送出";

                }

            }
        );



        /* =================================================
           清除錯誤
        ================================================= */

        function clearErrors() {

            const errors =
                document.querySelectorAll(
                    ".form-error"
                );

            errors.forEach(
                function (item) {

                    item.textContent = "";

                }
            );


            formMessage.textContent = "";

            formMessage.className =
                "contact-form-message";

            formMessage.removeAttribute(
                "tabindex"
            );

        }



        /* =================================================
           顯示錯誤
        ================================================= */

        function showError(
            id,
            text
        ) {

            const element =
                document.getElementById(id);

            if (element) {

                element.textContent =
                    text;

            }

        }



        /* =================================================
           Email 格式
        ================================================= */

        function isValidEmail(value) {

            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(value);

        }

    }
);