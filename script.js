// BURAYA KENDİ 150 GÖREVİNİ EKLE!
const gorevler = [
    "Yeni bir dil öğrenmeye başla (5 dakika bile olsa).",
    "Gözünü kapat ve 3 dakika boyunca nefesine odaklan.",
    "En son okuduğun kitaptan rastgele bir paragrafı yüksek sesle oku.",
    "Bir arkadaşına uzun süredir söylemediğin bir iltifat et.",
    "Evdeki bir eşyanın yerini değiştir ve nasıl hissettirdiğine bak.",
    "10 tane zıplama hareketi yap.",
    "10 saniye boyunca sürekli Twerk yap.",
    "Birkaç tane esneme hareketleri yap.",
    "Bugün seni gülümseten 3 şeyi fotoğrafla.",
    "En sevdiğin şarkıyı dinlerken dans et.",
    "Amuda kalk.",
    "15 saniye prank yap.",
    "Birini taklit et.",
    "Maymun/civciv/inek hayvanlarından birini taklit et.",
    "Nah çek.",
    "Bir eşyayı çenenle boynun arasına sıkıştır ve 5 saniye tut.",
    "Kendi fotoğrafını komikleştir.",
    "Başka birinin fotoğrafını komikleştir.",
    "Ütü yap. (en az 1 tane)",
    "Bir cümleyi tersten oku.",
    "Eski bir vineı tekrar çek.",
    "Okuduğun kitaptan bir cümleyi emojilerle anlat.",
    "Dizi sahnesi canlandır.",
    "İzlediğin son reelsi canlandır.",
    "Heykel pozu ver.",
    "Kendi etrafında 5 kez dön ve sonra düz yürümeye çalış.",
    "Havaya otur.",
    "Wordle'de günün kelimesini bul.",
    "Bir keko dansı hareketi yap.",
    "Göbeğini içine çekebildiğin kadar çekerek 20 saniye tut.",
    "Bebek taklidi yap.",
    "(Şiveyle) bir anı anlat.",
    "Birine aşk şiiri oku (ciddi veya komik).",
    "Bir tribün bestesi söyle.",
    "Bir pop şarkısını seslendir (bir kuble).",
    "Bir masalın kahramanını canlandır.",
    "Bir masalın kötü karakterini canlandır.",
    "NPC gibi davran.",
    "Bir haber sun.",
    "Yapay zekaya 4lük yazdır ve oku.",
    "Bir rap şarkısından 4 dize söyle.",
    "Bir film repliğini farklı duygularla (mutlu, üzgün, kızgın) söyle.",
    "Bir spor yorumcusu gibi bir eylemi anlat.",
    "Çok yaşlı bir insan sesiyle nasihat ver.",
    "Yabancı dilde küfret.",
    "Bir yabancıya yorum yaz (Youtube, İnsta ya da Twitter).",
    "Beyaz bir eşya ısır.",
    "Siyah bir eşya ısır.",
    "Pembe bir eşya ısır(kıyafet de olur).",
    "Mor bir eşya ısır (kıyafet de olur).",
    "Bir ünlüye (min. 1m takipçili) emoji at.",
    "Bir masal anlatıcısı gibi komik bir hikayeye başla.",
    "Komik bir olayı dramatik anlat.",
    "Dramatik olayı komik anlat.",
    "Galerindeki son fotoğrafı at ve açıkla.",
    "Sevmediğin bir özelliğini seviyormuş gibi anlat.",
    "Farklı renk çoraplarla gez.",
    "Bir ünlüye sakal bıyık çiz.",
    "Sevdiğin özelliğini sevmiyormuş gibi anlat.",
    "Evindeki en saçma eşyayı göster.",
    "En çok vakit harcadığın şeyi göster(telefon hariç).",
    "Tamamen troll bir cv oluştur.",
    "Kazıklandığın eşyayı göster.",
    "Su iç.",
    "Küp şeker ye (yoksa 1 çay kaşığı toz şeker ye).",
    "Bir eşyayı pazarlamaya çalış.",
    "Kafanın üstünde tepsi/kitap taşı.",
    "Telefonundaki en eski fotoğrafı göster.",
    "Dövme yaptırmak istediğin şeyi göster.",
    "Limon yala/limon suyu iç.",
    "Şimdiye kadarki en garip hayalini (gerçek veya uydurma) anlat.",
    "Ayakkabılarını/terliklerini ters giy ve yürü.",
    "Bir yastığa yumruk at.",
    "Ben diye başlayarak otomatik mesajda ne çıkarsa cümle oluştur.",
    "Saçma bir fikir savun (Dünya düzdür, evrim yok vb.).",
    "Bir kelime üret.",
    "Bir hemcisinden anlık iste.",
    "Kendine rastgele bir mutfak eşyasından bıyık yap ve İtalyan bir şefmiş gibi konuş.",
    "Bir kağıt al ve üzerine gruptaki en korkunç şeyi çizip göster.",
    "Sandalyende/oturduğun yerde görünmez bir ata binmiş gibi davran.",
    "Cumhurb. olmuş gibi konuşma yap.",
    "Politikacı vaatleri üret.",
    "Tüm vücudunu kullanarak bir harfin (rastgele bir harf seç) şeklini oluştur.",
    "İşaret diliyle bir kelime anlat (TDK'den bulabilirsin).",
    "Birilerini eşyalara benzet.",
    "Benim adım... diye başla ve kendini olmadığın bir meslekten biri gibi tanıt.",
    "Cem yılmaz şakası yap.",
    "Sessiz sinama oynuyormuş gibi bir filmi anlatmaya çalış.",
    "Birinin sevdiğin bir özelliğini taklit et.",
    "Hayatının en kötü randevu hikayesini abartılı bir şekilde anlat.",
    "En komik alışkanlığını itiraf et.",
    "Seksi olmak için ne yaparsın? sorusuna abartılı ve komik bir cevap ver.",
    "Bildiğin en yaratıcı küfrü söyle.",
    "Küfürlü atasözü söyle.",
    "Ex'e takip at (yoksa eski flört olur o da yoksa random birine).",
    "En saçma kombini yapmaya çalış.",
    "En beğendiğin kombini yap.",
    "En itici kombini yap.",
    "En seksi kombini yap.",
    "Yenemediğin bir tramvandan bahset.",
    "Öpücük at.",
    "Kıyafetini ters giy.",
    "Kendine nasihatte bulun.",
    "Sana en saçma gelen tarihi olayı anlat.",
    "Bir dizi sahnesinin (gerçekte yaşanmamış) gerçekte yaşandığını kanıtlamaya çalış.",
    "Karşı cins eşyası kullan.",
    "Bir süper kahraman pozu ver.",
    "Dark mizah postu yap (sosyal medyada paylaşmana gerek yok).",
    "Bir eşyayı amacı dışında kullan.",
    "Anlık at.",
    "Birini zorbala.",
    "İnsta/snap filtresi dene.",
    "Kupon yap (oynamana gerek yok).",
    "Bugün seni gülümseten 3 şeyi göster."
];


// HTML elemanlarını seçiyoruz
const gorevAlani = document.getElementById('gorev-alani');
const gorevButonu = document.getElementById('gorev-butonu');

// Butona tıklandığında çalışacak fonksiyon
function rastgeleGorevSec() {
    // *** 1. Önce eski animasyon sınıfını kaldırıyoruz (varsa) ***
    gorevAlani.classList.remove('gorev-geldi');

    // 1. Rastgele bir indeks numarası seç
    const rastgeleIndex = Math.floor(Math.random() * gorevler.length);
    
    // 2. Seçilen indeksteki görevi al
    const secilenGorev = gorevler[rastgeleIndex];
    
    // 3. Görevi ekrana yazdır
    gorevAlani.textContent = secilenGorev;

    // *** 4. Yeni animasyon sınıfını ekle (Bu animasyonu tetikler) ***
    // set timeout, animasyonun çalışması için bir saniye sonra eklememizi sağlar
    setTimeout(() => {
        gorevAlani.classList.add('gorev-geldi');
    }, 10); // Çok kısa bir gecikme, tarayıcının değişikliği algılaması için yeterli
}

// ... geri kalan kod (gorevButonu.addEventListener kısmı) aynı kalacak.

// Butona tıklandığında rastgeleGorevSec fonksiyonunu çalıştır
gorevButonu.addEventListener('click', rastgeleGorevSec);

