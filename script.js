// script.js dosyası

document.addEventListener('DOMContentLoaded', () => {
    // Videonun HTML elemanını ID'si ile seçiyoruz
    // HTML kodunda <video id="youtube-video"> olarak ayarlamıştık.
    const videoElement = document.getElementById('youtube-video');

    // Eğer video elemanı sayfada mevcutsa devam et
    if (videoElement) {
        // Videonun metadata bilgileri yüklendiğinde (video oynatılmaya hazır olduğunda)
        // ses seviyesini ayarlayalım. Bu, videonun oynamaya başlamadan önce ayarlandığından emin olur.
        videoElement.addEventListener('loadedmetadata', () => {
            // Ses seviyesini ayarla. Değer 0.0 (sessiz) ile 1.0 (maksimum ses) arasındadır.
            // Örneğin, %30 ses seviyesi için 0.3 kullanabilirsin.
            const desiredVolume = 0.3; // İstediğin ses seviyesini buraya gir (örneğin 0.5 için %50 ses)

            videoElement.volume = desiredVolume;

            // ÖNEMLİ NOT:
            // Eğer HTML'deki <video> etiketinde `autoplay` ve `muted` özellikleri varsa,
            // video sessiz olarak otomatik başlayacaktır.
            // Tarayıcılar, kullanıcı etkileşimi olmadan (örneğin bir tıklama) sesi açmaya izin vermez.
            // Bu nedenle, JavaScript ile ayarladığın `desiredVolume` değeri,
            // kullanıcı video oynatıcıdaki ses açma butonuna tıkladığında veya
            // videoyla başka bir şekilde etkileşime geçtiğinde devreye girecektir.
            // Yani, video sessiz başlayacak, kullanıcı sesi açtığında ayarladığın %30 ses seviyesinden devam edecektir.

            // Eğer `muted` özelliğini HTML'den kaldırırsan, video otomatik başlamaz
            // çünkü tarayıcılar sesi açık videoların otomatik başlamasını engeller.
            // Bu durumda, kullanıcı oynat tuşuna bastığında video ayarladığın ses seviyesinden başlar.
        });

        // Eğer videonun otomatik olarak başlaması ve kullanıcının sesi açtıktan sonra
        // ayarlanan seviyede çalması isteniyorsa, HTML'deki `autoplay` ve `muted`
        // özelliklerini korumak en iyi yaklaşımdır.
    } else {
        console.warn("Video elemanı 'myVideo' ID'si ile bulunamadı. Lütfen HTML'deki video etiketinin ID'sini kontrol edin.");
    }
});