     <style>
        :root {
            --primary: #B71C12;
            --secondary: #6A1B9A;
            --surface: #1A1A1A;
            --background: #121212;
            --text-primary: #FAF9F6;
            --text-secondary: #B0BEC5;
            --elevation-1: 0 4px 10px rgba(0, 0, 0, 0.5);
        }

        * {
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background: var(--background);
            color: var(--text-primary);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
        }

        .elegant-container {
            max-width: 700px;
            margin: 2rem auto;
            padding: 1.5rem;
            background: var(--surface);
            border-radius: 20px;
            box-shadow: var(--elevation-1);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 2.5rem;
            text-align: center;
            color: var(--primary);
            font-weight: 700;
            margin: 1rem 0;
        }

        h2 {
            font-family: 'Roboto', sans-serif;
            font-size: 1.25rem;
            cursor: pointer;
            padding: 10px;
            background-color: rgba(183, 28, 28, 0.2);
            border-radius: 8px;
            transition: background-color 0.3s ease;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        h2:hover {
            background-color: rgba(183, 28, 28, 0.3);
        }

        h5 {
            font-family: 'Inter', sans-serif;
            font-size: 0.8rem;
            cursor: pointer;
            padding: 1px;
            background-color: rgba(0, 0, , 0.2);
            border-radius: 8px;
            transition: background-color 0.3s ease, transform 0.2s ease;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        footer {
            margin-top: 2rem;
            padding: 1rem 0;
            text-align: center;
            font-size: 0.9rem;
            font-family: 'Inter', sans-serif;
            color: var(--text-secondary);
            background: rgba(0, 0, 0, 0.05);
            border-top: 0px solid rgba(255, 255, 255, 0.1);
        }

        footer span {
            color: #6A1B9A;
            font-weight: 500;
        }

        .section-content {
            display: none;
            padding: 10px;
            border-left: 4px solid var(--primary);
            margin: 10px 0;
            background-color: rgba(183, 28, 28, 0.1);
            border-radius: 8px;
        }

        .section-content.active {
            display: block;
        }

        .tabs {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin: 1rem 0;
        }

        .tab-button {
            padding: 0.75rem 1.5rem;
            border: 1px solid var(--primary);
            border-radius: 8px;
            background: transparent;
            color: var(--primary);
            cursor: pointer;
            transition: all 0.2s ease;
            font-weight: 500;
        }

        .tab-button.active {
            background: var(--primary);
            color: white;
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0.75rem;
            padding: 0.3rem 0;
            gap: 10px;
        }

        .item-label {
            flex: 1;
            font-size: 14px;
            color: var(--text-secondary);
        }

        .slider {
            -webkit-appearance: none;
            appearance: none;
            width: 120px;
            height: 6px;
            background: linear-gradient(to right, #FF4D4D, #FF914D, #FFD700, #00CC66);
            border-radius: 3px;
            outline: none;
            cursor: pointer;
            touch-action: none;
            -webkit-tap-highlight-color: transparent;
        }

        .slider::-webkit-slider-runnable-track {
            width: 100%;
            height: 6px;
            background: linear-gradient(to right, #FF4D4D, #FF914D, #FFD700, #00CC66);
            border-radius: 3px;
        }

        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 24px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 3px;
            margin-top: -9px;
            cursor: pointer;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        }

        .slider::-moz-range-track {
            width: 100%;
            height: 6px;
            background: linear-gradient(to right, #FF4D4D, #FF914D, #FFD700, #00CC66);
            border-radius: 3px;
        }

        .slider::-moz-range-thumb {
            width: 16px;
            height: 24px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 3px;
            border: none;
            cursor: pointer;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        }

        .preference {
            width: 80px;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .share-container {
            text-align: center;
            margin-top: 2rem;
        }

        .share-button {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            color: white;
            transition: background 0.2s ease, transform 0.2s ease;
            margin: 0.5rem;
        }

        .share-button:hover {
            transform: scale(1.05);
        }

        .telegram { background: #0088CC; }
        .whatsapp { background: #25D366; }
        .email { background: #D32F2F; }
        .copy-link { background: #FFB300; color: var(--background); }

        .toast-container {
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .toast {
            background-color: #333333;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .toast.show {
            opacity: 1;
            transform: translateY(0);
        }

        .reset-button-container {
            display: flex;
            justify-content: center;
            margin-top: 1.5rem;
        }

        .reset-button {
            background-color: #EF5350;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            font-family: 'Inter', sans-serif;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }

        .reset-button:hover {
            background-color: #D32F2F;
            transform: translateY(-2px);
        }

        .footer {
            margin-top: 2rem;
            padding: 1rem 0;
            text-align: center;
            font-size: 0.7rem;
            font-family: 'Inter', sans-serif;
            color: var(--text-secondary);
            background: rgba(255, 255, 255, 0.05);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        textarea {
            width: 100%;
            height: 6rem;
            padding: 0.75rem;
            border-radius: 8px;
            border: 1px solid #FFCA28;
            background: #333333;
            color: #CFD8DC;
            resize: vertical;
            font-family: inherit;
            font-size: 1rem;
            box-sizing: border-box;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        textarea:focus {
            outline: none;
            border-color: #FFCA28;
            box-shadow: 0 0 6px rgba(255, 202, 40, 0.5);
        }

        .separator {
            margin: 2rem 0;
            border-top: 2px solid #121212;
            text-align: center;
            position: relative;
        }

        .separator span {
            position: absolute;
            top: -0.8rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--surface);
            padding: 0 1rem;
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            color: #6A1B9A;
            font-weight: 500;
        }

        @media (max-width: 768px) {
            .slider {
                width: 100px;
            }
            .slider::-webkit-slider-thumb {
                width: 20px;
                height: 28px;
            }
            .slider::-moz-range-thumb {
                width: 20px;
                height: 28px;
            }
            .item-label, .preference {
                font-size: 0.875rem;
            }
            .tabs, .share-container {
                flex-wrap: wrap;
            }
            .share-button, .reset-button {
                padding: 0.5rem 1rem;
                font-size: 0.875rem;
            }
            .toast-container {
                bottom: 0.5rem;
                right: 0.5rem;
            }
            .item {
                flex-wrap: wrap;
                gap: 5px;
            }
        }
        #saveMessage {
            font-size: 0.875rem;
            color: #26A69A;
            margin-top: 0.5rem;
            text-align: right;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        @media (max-width: 480px) {
            .elegant-container {
                margin: 1rem;
                padding: 1rem;
            }
            h1 {
                font-size: 2rem;
            }
            .slider {
                width: 90px;
            }
            .preference {
                width: 70px;
            }
        }
    </style>