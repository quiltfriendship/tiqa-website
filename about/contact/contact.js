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

        const formMessage =
            document.getElementById(
                "contact-form-message"
            );


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                clearErrors();


                let valid = true;


                /* =========================
                   姓名
                ========================= */

                if (
                    !name.value.trim()
                ) {

                    showError(
                        "contact-name-error",
                        "請填寫姓名。"
                    );

                    valid = false;
                }


                /* =========================
                   Email
                ========================= */

                if (
                    !email.value.trim()
                ) {

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


                /* =========================
                   聯絡事項
                ========================= */

                if (
                    !message.value.trim()
                ) {

                    showError(
                        "contact-message-error",
                        "請填寫聯絡事項。"
                    );

                    valid = false;
                }


                /* =========================
                   同意
                ========================= */

                if (
                    !consent.checked
                ) {

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
                   第一階段尚未接後端
                ========================= */

                formMessage.textContent =
                    "聯絡表單目前尚未啟用線上寄送功能，請先寄信至 quiltfriendship@gmail.com 與我們聯絡。";

                formMessage.className =
                    "contact-form-message is-visible is-info";

            }
        );


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
        }


        function showError(
            id,
            text
        ) {

            const element =
                document.getElementById(id);

            if (element) {
                element.textContent = text;
            }

        }


        function isValidEmail(value) {

            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(value);

        }

    }
);