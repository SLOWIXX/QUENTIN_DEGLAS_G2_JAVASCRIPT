    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('tab-active'));
        contents.forEach(c => c.classList.remove('active'));

        this.classList.add('tab-active');

        if (this.classList.contains('tab-content1')) {
          document.querySelector('.content1').classList.add('active');
        } else if (this.classList.contains('tab-content2')) {
          document.querySelector('.content2').classList.add('active');
        } else if (this.classList.contains('tab-content3')) {
          document.querySelector('.content3').classList.add('active');
        }
      });
    });