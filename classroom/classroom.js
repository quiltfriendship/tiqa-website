document.addEventListener(
    "DOMContentLoaded",
    function () {

        const container =
            document.getElementById(
                "classroom-list"
            );

        if (!container) {
            return;
        }


        if (
            typeof classroomData === "undefined" ||
            !Array.isArray(classroomData)
        ) {

            console.error(
                "classroomData 資料不存在"
            );

            return;
        }


        classroomData.forEach(
            function (item) {

                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "classroom-card";


                /* =========================
                   圖片
                ========================= */

                const imageWrap =
                    document.createElement(
                        "div"
                    );

                imageWrap.className =
                    "classroom-image";


                const image =
                    document.createElement(
                        "img"
                    );

                image.src =
                    item.image ||
                    "/assets/images/classroom/default.jpg";

                image.alt =
                    item.teacher
                        ? item.teacher + "老師"
                        : "推薦教室";

                image.loading =
                    "lazy";


                image.addEventListener(
                    "error",
                    function () {

                        if (
                            image.dataset.fallback
                        ) {
                            return;
                        }

                        image.dataset.fallback =
                            "true";

                        image.src =
                            "/assets/images/classroom/default.jpg";

                    }
                );


                imageWrap.appendChild(
                    image
                );


                /* =========================
                   Body
                ========================= */

                const body =
                    document.createElement(
                        "div"
                    );

                body.className =
                    "classroom-body";


                const main =
                    document.createElement(
                        "div"
                    );

                main.className =
                    "classroom-main";


                /* =========================
                   老師姓名
                ========================= */

                const teacher =
                    document.createElement(
                        "h2"
                    );

                teacher.textContent =
                    item.teacher
                        ? item.teacher + " 老師"
                        : "";


                main.appendChild(
                    teacher
                );


                /* =========================
                   教室名稱
                ========================= */

                const classroomName =
                    document.createElement(
                        "p"
                    );

                classroomName.className =
                    "classroom-name";


                if (item.classroom) {

                    classroomName.textContent =
                        item.classroom;

                }
                else {

                    classroomName.classList.add(
                        "classroom-name-empty"
                    );

                    classroomName.innerHTML =
                        "&nbsp;";

                }


                main.appendChild(
                    classroomName
                );


                /* =========================
                   描述
                ========================= */

                if (item.description) {

                    const description =
                        document.createElement(
                            "p"
                        );

                    description.className =
                        "classroom-description";

                    description.textContent =
                        item.description;

                    main.appendChild(
                        description
                    );

                }


                /* =========================
                   基本資訊
                ========================= */

                const info =
                    document.createElement(
                        "dl"
                    );

                info.className =
                    "classroom-info";


                /* 電話 */

                if (item.phone) {

                    const phoneUrl =
                        "tel:" +
                        item.phone.replace(
                            /[^0-9+]/g,
                            ""
                        );

                    addInfoRow(
                        info,
                        "電話",
                        item.phone,
                        phoneUrl
                    );

                }


                /* 地址 */

                if (
                    item.addressLabel &&
                    item.address
                ) {

                    addInfoRow(
                        info,
                        item.addressLabel,
                        item.address
                    );

                }


                /* 其他資料 */

                if (
                    Array.isArray(
                        item.extra
                    )
                ) {

                    item.extra.forEach(
                        function (extra) {

                            if (
                                extra.label &&
                                extra.value
                            ) {

                                addInfoRow(
                                    info,
                                    extra.label,
                                    extra.value
                                );

                            }

                        }
                    );

                }


                /* 社群連結 */

                if (
                    Array.isArray(
                        item.links
                    )
                ) {

                    item.links.forEach(
                        function (link) {

                            if (
                                link.label &&
                                link.url
                            ) {

                                addInfoRow(
                                    info,
                                    link.label,
                                    link.label,
                                    link.url,
                                    true
                                );

                            }

                        }
                    );

                }


                if (
                    info.children.length > 0
                ) {

                    main.appendChild(
                        info
                    );

                }


                body.appendChild(
                    main
                );


                /* =========================
                   教學內容
                ========================= */

                if (item.teaching) {

                    const teaching =
                        document.createElement(
                            "div"
                        );

                    teaching.className =
                        "classroom-teaching";


                    const teachingTitle =
                        document.createElement(
                            "h3"
                        );

                    teachingTitle.textContent =
                        "主要教學內容";


                    const teachingText =
                        document.createElement(
                            "p"
                        );

                    teachingText.textContent =
                        item.teaching;


                    teaching.appendChild(
                        teachingTitle
                    );

                    teaching.appendChild(
                        teachingText
                    );


                    body.appendChild(
                        teaching
                    );

                }


                /* =========================
                   組合
                ========================= */

                card.appendChild(
                    imageWrap
                );

                card.appendChild(
                    body
                );


                container.appendChild(
                    card
                );

            }
        );

    }
);



/* =========================================================
   建立資訊列
========================================================= */

function addInfoRow(
    dl,
    label,
    value,
    url = "",
    external = false
) {

    const row =
        document.createElement(
            "div"
        );


    const dt =
        document.createElement(
            "dt"
        );

    dt.textContent =
        label;


    const dd =
        document.createElement(
            "dd"
        );


    if (url) {

        const link =
            document.createElement(
                "a"
            );

        link.href =
            url;

        link.textContent =
            value;


        if (external) {

            link.target =
                "_blank";

            link.rel =
                "noopener noreferrer";

        }


        dd.appendChild(
            link
        );

    }
    else {

        dd.textContent =
            value;

    }


    row.appendChild(
        dt
    );

    row.appendChild(
        dd
    );


    dl.appendChild(
        row
    );

}