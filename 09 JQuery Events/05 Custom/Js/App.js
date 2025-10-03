$(document).ready(function() {
    // Basic Custom Event
    $('#customEventDemo').on('customEvent', function() {
        const timestamp = new Date().toLocaleTimeString();
        $('#customEventResult')
            .text(`Özel olay tetiklendi! (${timestamp})`)
            .css('color', 'var(--success-color)');
    });

    $('#triggerCustom').click(function() {
        $('#customEventDemo').trigger('customEvent');
    });

    // Custom Event with Data
    $('#dataEventDemo').on('dataEvent', function(event, data) {
        const timestamp = new Date().toLocaleTimeString();
        $('#dataEventResult')
            .html(`Alınan veri: "${data.message}"<br>Zaman: ${timestamp}`)
            .css('color', 'var(--success-color)');
    });

    $('#triggerWithData').click(function() {
        const message = $('#eventData').val() || 'Varsayılan mesaj';
        $('#dataEventDemo').trigger('dataEvent', {
            message: message,
            timestamp: new Date()
        });
        $('#eventData').val('');
    });

    // Event Namespace
    let eventLog = [];
    
    function updateNamespaceLog() {
        $('#namespaceResult').html(
            eventLog.map(log => `${log}<br>`).join('')
        );
    }

    $('#namespaceDemo')
        .on('click.demo', function() {
            eventLog.unshift('→ click.demo olayı tetiklendi');
            updateNamespaceLog();
        })
        .on('click.test', function() {
            eventLog.unshift('→ click.test olayı tetiklendi');
            updateNamespaceLog();
        });

    $('#triggerAll').click(function() {
        eventLog = [];
        $('#namespaceDemo').trigger('click');
    });

    $('#triggerNamespace').click(function() {
        eventLog = [];
        $('#namespaceDemo').trigger('click.demo');
    });

    // Event Delegation
    let taskCount = 3;
    let completedTasks = 0;

    $('.task-list').on('click', '.complete-task', function() {
        const $task = $(this).parent();
        if (!$task.hasClass('completed')) {
            $task.addClass('completed');
            $(this).text('Tamamlandı');
            completedTasks++;
            updateTaskCount();
        }
    });

    $('#addTask').click(function() {
        taskCount++;
        $('.task-list').append(`
            <div class="task-item">
                Görev ${taskCount}
                <button class="complete-task">Tamamla</button>
            </div>
        `);
    });

    function updateTaskCount() {
        $('#delegationResult').text(
            `Tamamlanan görevler: ${completedTasks}`
        );
    }

    // Event Chain
    let currentStep = 0;
    const totalSteps = 3;
    
    function resetChain() {
        currentStep = 0;
        $('.chain-step')
            .removeClass('active completed')
            .css('transition-delay', '0s');
        $('#chainResult').text('Zincir bekleniyor...');
    }

    $('#chainDemo').on('startChain', function() {
        resetChain();
        $(this).trigger('step1');
    });

    $('#chainDemo')
        .on('step1', function() {
            currentStep = 1;
            updateChainUI();
            setTimeout(() => $(this).trigger('step2'), 1000);
        })
        .on('step2', function() {
            currentStep = 2;
            updateChainUI();
            setTimeout(() => $(this).trigger('step3'), 1000);
        })
        .on('step3', function() {
            currentStep = 3;
            updateChainUI();
            setTimeout(() => {
                $('#chainResult')
                    .text('Zincir tamamlandı!')
                    .css('color', 'var(--success-color)');
            }, 1000);
        });

    function updateChainUI() {
        $('.chain-step').each(function() {
            const step = $(this).data('step');
            if (step < currentStep) {
                $(this)
                    .removeClass('active')
                    .addClass('completed');
            } else if (step === currentStep) {
                $(this)
                    .addClass('active')
                    .removeClass('completed');
            } else {
                $(this)
                    .removeClass('active completed');
            }
        });

        $('#chainResult').text(`Adım ${currentStep} yürütülüyor...`);
    }

    $('#startChain').click(function() {
        $('#chainDemo').trigger('startChain');
    });

    // Input olayları için enter tuşu desteği
    $('#eventData').keypress(function(event) {
        if (event.which === 13) {
            $('#triggerWithData').click();
        }
    });
});
