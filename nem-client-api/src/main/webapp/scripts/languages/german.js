define({
	id: 'DE',
	name: 'Deutsch',
	texts: {
		preferences: {
			thousandSeparator: '.',
			decimalSeparator: ','
		},
		faults: {
			101: 'Die Brieftasche existiert nicht.',
			102: 'Die Brieftasche konnte nicht erstellt werden.',
			103: 'Die Brieftasche ist beschädigt. Bitte stelle die Brieftasche aus einem Backup wieder her.',
			104: 'Das Passwort für die Brieftasche ist nicht korrekt.',
			105: 'Es wurde kein Passwort für die Brieftasche eingegeben.',
			106: 'Bevor du eine Brieftasche benutzen kannst, muss sie geöffnet werden. Um sicher zu stellen, dass du berechtigt bist, die Brieftasche zu verwenden, musst du das Passwort für die Brieftasche eingeben.',
			107: 'Die Brieftasche enthält dieses Konto nicht.',
			108: 'Das Konto kann nicht entfernt werden. Der Grund ist meistens, dass der Kontostand größer als 0 XEM ist oder, dass Du versuchst, ein Hauptkonto zu entfernen.',
			109: 'Es gibt bereits eine Brieftasche mit diesem Namen. Bitte wähle einen anderen Namen für die Brieftasche.',
			110: 'Die Brieftasche enthält dieses Konto bereits.',
			111: 'Der Name der Brieftasche darf kein Dateiverzeichnis sein.',
			112: 'Die Dateiendung der Brieftasche ist falsch.',
			113: 'Die Brieftasche konnte nicht gelöscht werden.',
			121: 'Das Adressbuch existiert nicht.',
			122: 'Das Adressbuch konnte nicht erstellt werden.',
			123: 'Das Adressbuch ist beschädigt. Bitte stelle das Adressbuch aus einem Backup wieder her.',
			124: 'Das Passwort für das Adressbuch ist nicht korrekt.',
			125: 'Es wurde kein Passwort für das Adressbuch eingegeben.',
			127: 'Das Adressbuch enthält diese Adresse nicht.',
			128: 'Die Adresse ist ungültig.',
			129: 'Es gibt bereits ein Adressbuch mit diesem Namen. Bitte wähle einen anderen Namen für das Adressbuch.',
			130: 'Das Adressbuch enthält diese Adresse bereits.',
			131: 'Der Name des Adressbuches darf kein Dateiverzeichnis sein.',
			132: 'Die Dateiendung des Adressbuchs ist falsch.',
			133: 'Das Adressbuch konnte nicht gelöscht werden.',
			202: 'Die verschlüsselte Nachricht kann nicht gesendet werden, da der Empfänger bisher noch keine Transaktion gesendet hat und deswegen der öffentliche Schlüssel des Empfängers unbekannt ist.',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'Der NEM Infrastructure Server (NIS) ist nicht verfügbar.\n\nEin Neustart der NEM Software könnte dieses Problem beheben.\n\nFalls du einen Remote-NIS benutzt, überprüfe den eingestellten Host auf Tippfehler oder benutze einen anderen Remote-NIS.',
			306: 'Es ist ein unvorhergesehener Fehler aufgetreten.\n\nSollte dieser Fehler wiederholt auftreten, könnte ein Neustart der NEM Software das Problem beheben. Falls nicht, eröffne bitte einen Thread in der NEM NIS/NCC Community.',
			400: 'Einer der Parameter fehlt oder ist ungültig.',
			401: 'Dieser Vorgang kann nicht durchgeführt werden, da der private Schlüssel gestohlen werden könnte, wenn er an das remote NIS gesendet wird.',
			404: 'Die angeforderte Ressource wurde nicht gefunden.',
			500: 'Es ist ein unvorhergesehener Fehler aufgetreten.\n\nSollte dieser Fehler wiederholt auftreten, könnte ein Neustart der NEM Software das Problem beheben. Falls nicht, eröffne bitte einen Thread in der NEM NIS/NCC Community.',
			600: 'Der NEM Infrastructure Server (NIS) muss gebootet sein, damit Transaktionen gesendet und empfangen werden können. Bitte boote NIS mit Hilfe des NCC Boot-Menüpunkts.',
			601: 'Der NEM Infrastructure Server (NIS) ist bereits gebootet. Es ist nicht nötig, NIS ein weiteres Mal zu booten.',
			602: 'Fast fertig! NEM Infrastructure Server (NIS) lädt gerade die Blöcke. Die Brieftasche ist einsatzbereit, wenn alle Blöcke geladen sind.',
			699: 'Die maximale Anzahl an Harvestern, die auf diesem Server erlaubt ist, ist erreicht.',
			700: 'Das angegebene Konto erfüllt nicht die Grundkriterien, um Blöcke zu erzeugen. Um Blöcke erzeugen zu können, wird ein Kontostand von mindestens 1.000 XEM benötigt.',
			701: 'Das angegebene Verfallsdatum liegt in der Vergangenheit. Das Verfallsdatum muss in einem Zeitraum von einem Tag liegen.',
			702: 'Das angegebene Verfallsdatum liegt zu weit in der Zukunft. Das Verfallsdatum muss in einem Zeitraum von einem Tag liegen.',
			703: 'Your account does not have the right balance to make this transaction.',
			704: 'Die eingegebene Nachricht ist zu lang. Bitte reduziere die Länge der Nachricht, um sie versenden zu können.',
			705: 'Der Transaktionshash existiert bereits in der Datenbank oder in der Liste der ausstehenden Transaktionen.',
			706: 'Die Signatur der Transaktion konnte nicht verifiziert werden.',
			707: 'Der Zeitstempel der Transaktion liegt zu weit in der Vergangenheit.',
			708: 'Der Zeitstempel der Transaktion liegt zu weit in der Zukunft.',
			709: 'Das Konto ist unbekannt. Ein Konto muss mindestens einmal als Absender oder Empfänger in einer Transaktion auftreten, um dem Netzwerk bekannt zu sein.',
			710: 'Die Transaktion wurde abgelehnt, weil gerade zu viele Transaktionen gesendet werden. Eine höhere Gebühr erhöht die Chance, dass die Transaktion akzeptiert wird.',
			730: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			731: 'Delegated harvesting account has non zero balance and cannot be used.',
			732: 'Übertragung der Wichtigkeit abgelehnt, da es noch eine ausstehende Übertragung gibt.',
			733: 'Delegated harvesting is already active.',
			734: 'Delegated harvesting is NOT active. Cannot deactivate.',
			740: 'Transaktion ist für ein Multisig-Konto nicht erlaubt.',
			741: 'Multisig-Signierung abgelehnt. Das aktuelle Konto ist kein Mitsignierer eines Multisig-Kontos.',
			742: 'Multisig-Signierung abgelehnt. Die zu signierende Multisig-Transaktion existiert nicht.',
			743: 'Änderung des Multisig-Kontos abgelehnt. Eines der hinzugefügten Konten ist schon Mitsignierer.',
			901: 'Es ist ein Fehler beim Übergang zum Offlinemodus aufgetreten.',
			1000: 'Der eingegebene private Schlüssel passt nicht zum eingegebenen öffentlichen Schlüssel.',
			1001: 'Der eingegebene öffentliche Schlüssel passt nicht zur eingegebenen Adresse.',
			1002: 'Die Adresse gehört nicht zum Hauptnetzwerk.'
		},
		common: {
			success: 'Erfolg',
			unknown: 'Unbekannter Status',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCC-Status ist unbekannt',
				nccUnavailable: 'NCC ist nicht verfügbar',
				nccStarting: 'NCC wird gestartet...',
				nisUnknown: 'NIS-Status ist unbekannt',
				nisUnavailable: 'NIS ist nicht verfügbar',
				nisStarting: 'NIS wird gestartet...',
				notBooted: 'NIS muss gebootet werden. Bitte öffne eine Brieftasche und boote NIS mit Hilfe des Popup-Dialoges.',
				loading: 'Lade Blöcke aus der Datenbank, im Moment bei Block: ',
				booting: 'NIS wird gebootet...',
				nisInfoNotAvailable: 'NIS-Status wird abgefragt...',
				synchronizing: 'NIS synchronisiert gerade. Block {{1}}, {{2}} im Rückstand.',
				daysBehind: {
					0: 'weniger als 1 Tag',
					1: 'etwa 1 Tag',
					many: 'etwa {{1}} Tage'
				},
				synchronized: 'NIS ist synchron!',
				noRemoteNisAvailable: 'Kein Remote-NIS gefunden. Ist die Internetverbindung unterbrochen?'
			},
			addressBook: 'Adressbuch',
			password: 'Passwort',
			passwordValidation: 'Das Passwort darf nicht leer sein',
			address: 'Adresse',
			privateLabel: 'Eigene Bezeichnung',
			publicLabel: 'Öffentliche Bezeichnung',
			noCharge: 'Das Konto wird <b>NICHT</b> mit Gebühren belastet. Das Multisig-Konto zahlt die Gebühren.',
			fee: 'Gebühr',
			justUse: 'Just use',
			dueBy: 'Verfällt in',
			hours: 'Stunde(n)',
			hoursDue: 'Deaktivierung verwerfen, wenn sie nicht akzeptiert wird innerhalb (Stunden)',
			hoursDueExplanation: 'If the transaction isn\'t included by the deadline, it is rejected.',
			closeButton: 'Close'
		},
		transactionTypes: [
			'XEM-Überweisung',
			'Wichtigkeitsübertragung',
			'Multisig-Konto-Modifikation',
			'Multisig-Überweisung'
		],
		transactionDirections: {
			pending: 'Ausstehende Transaktion',
			outgoing: 'Ausgehende Transaktion',
			incoming: 'Eingehende Transaktion',
			self: 'Transaktion zu sich selbst',
			importance: 'Wichtigkeitsübertragung',
			modification: 'Multisig-Konto-Modifikation'
		},
		modals: {
			error: {
				title: 'Entschuldigung!',
				caption: 'FEHLER {{1}}'
			},
			yikes: {
				title: 'Achtung!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Ja',
				no: 'Nein'
			},
			initialTy: {
				title: "WELCOME to NEM",
				content: "<c>Sbhaqrq ba gur fgebat cevapvcyrf bs rtnyvgnevna naq rdhnyvgl va qvfgevohgvba, gur Arj Rpbabzl Zbirzrag, ARZ, unf abj svanyyl pbzr gb sehvgvba nsgre pybfr gb 14 zbaguf bs vagrafvir qrirybczrag. Va nqqvgvba gb 5 pber qrirybcref naq 7 pber znexrgref, jr unir n ubfg bs pbzzhavgl zrzoref jub unir urycrq hf va bar jnl be nabgure, jvgubhg jubz, guvf jbhyq arire unir pbzr gbtrgure fb jryy nf orvat bar bs gur srj pelcgb vavgvngvirf jvgu fhpu n ovt grnz. Fcrpvny zragvba vf tvira gb gur sbyybjvat:</c><ue/><c><o>Grpuavpny naq Znexrgvat vachg:</o><oe/> Nzl, naqzr, nirentrwbr, OenvaBsZnffrf, qmnezhfpu, RSSI, Rynan82, rexxv, servtrvfg, unccl4209, vafgnpnfu, wnqrqwnpx, XrivaYv, XxbgArz, xbbernz, Xelfgb, Ybv Gena, ylxn, zvkznfgre, ZeCbegZna, arzovg, akxbvy, bjba, Cnagure03, curebzbar, erabgrat.yv, evtry, FnhyTenl, funjayrnel, fbyvk, fgbar, guvyba, haibvqcy, munaxnvjra, mbngn87, 守望者, 攻陳τч酨鈊, 清风, 福泽天下</c><ue/><c><o>APP Hfre Vagresnpr genafyngvba:</o><oe/>ncrk, obrfgva, Punbf514, QVZXNMQF, svypurs, servtrvfg, Thyvire, vnzvavgabj06, Wnarn4cqn, xhccnynugv, Ypuneyrf, znegvfznegvf, zrff-yrybhpu, Cnenan, evtry, Funja, Fcvqre, 楊 輝彦</c><c><oe/>Va nqqvgvba gb gur nobir 67 grnz zrzoref, jr nyfb unir bgure zrzoref jub  pbagevohgrq, jurgure va grpuavpny, znexrgvat be fgerff grfgvat gur flfgrz qhevat gur nycun naq orgn cunfr. Jr jbhyq yvxr gb nqqvgvbanyyl gunax nyy gubfr vaqvivqhnyf abg yvfgrq urer naq gur terngre ARZ pbzzhavgl orpnhfr jvgubhg gurz, jr jbhyq unir abg rire pbzr fb sne.</c><ue/><c>Naq zbfg vzcbegnagyl<oe/><o>Gunax LBH!</o><oe/><oe/>Arj Rpbabzl fgnegf jvgu LBH!</c>"
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: 'Einstellungen',
				language: {
					label: 'Sprache'
				},
				remoteServer: {
					tabTitle: 'Remote-Server',
					protocol: 'Protokoll',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Standard-Port benutzen.'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Name des NIS',
					account: 'Konto',
					primaryAccount: 'Hauptkonto',
					auto: 'Automatisch booten beim Öffnen der Brieftasche'
				},
				save: 'Speichern',
				saveSuccess: 'Die Einstellungen wurden erfolgreich gespeichert'
			},
			multisig: {
				title: 'In Multisig-Konto umwandeln',
				multisigAccount: 'Multisig-Konto',
				cosignatories: 'Adressen der Mitsignierer',
				labelDesc: 'Die Bezeichnung des Kontos ist {{1}}',
				nullLabelDesc: 'Dieses Konto hat keine Bezeichnung',
				addCosignatory: '+ Mitsignierer hinzufügen',
				cancel: 'Abbrechen',
				convert: 'Umwandeln',
				fee: 'Gebühr',
				feeValidation: 'Die Gebühr darf die Mindestgebühr nicht unterschreiten',
				useMinimumFee: 'Benutze Mindestgebühr',
				txConfirm: {
					title: 'Umwandlung in Multisig-Konto bestätigen',
					total: 'Insgesamt',

				},
				warning: 'Das Multisig-Konto ist selbst in der Liste der Mitsignierer. Das bedeutet, dass über das Vermögen auf diesem Konto nicht mehr verfügt werden kann. Es ist höchstwahrscheinlich, dass du das <b>NICHT</b> tun möchtest.'
			},
			signMultisig: {
				title: 'Multisig-Transaktion signieren',
				original: {
					from: 'Multisig-Konto',
					to: 'Empfänger',
					amount: 'Betrag',
					fee: 'Gebühr',
					deadline: 'Frist'
				},
				multisigFees: 'Signierungs-Gebühr',
				multisigTotal: 'Insgesamt',
				sender: 'Mitsignierer',
				fee: 'Gebühr',
				feeValidation: 'Die Gebühr darf die Mindestgebühr nicht unterschreiten',
				useMinimumFee: 'Benutze Mindestgebühr',
				password: 'Passwort',
				passwordValidation: 'Das Passwort darf nicht leer sein',
				send: 'Senden',
				cancel: 'Abbrechen',
				sending: 'Sende...',
				successMessage: 'Die Transaktion wurde erfolgreich gesendet!',
				txConfirm: {
					title: 'Multisig-Transaktion bestätigen',
					message: 'Nachricht',
					encrypted: 'Nachricht ist verschlüsselt',
					noMessage: 'Keine Nachricht',

				}
			},
			sendNem: {
				title: 'XEM senden',
				sender: 'Absender',
				thisAccount: 'Dieses Konto',
				labelDesc: 'Die Bezeichnung des Kontos ist {{1}}',
				nullLabelDesc: 'Dieses Konto hat keine Bezeichnung',
				amount: 'Betrag',
				recipient: 'Adresse oder Bezeichnung des Empfängerkontos',
				recipientValidation: 'Adressen müssen eine Länge von 40 Zeichen (ohne Bindestriche) haben',
				message: 'Nachricht',
				encrypt: 'Nachricht verschlüsseln',
				fee: 'Gebühr',
				multisigFee: 'Signierungs-Gebühr',
				feeValidation: 'Die Gebühr darf die Mindestgebühr nicht unterschreiten',
				useMinimumFee: 'Benutze Mindestgebühr',
				password: 'Passwort',
				passwordValidation: 'Das Passwort darf nicht leer sein',
				send: 'Senden',
				cancel: 'Abbrechen',
				sending: 'Sende...',
				successMessage: 'Die Transaktion wurde erfolgreich gesendet!',
				txConfirm: {
					title: 'Transaktion bestätigen',
					amount: 'Betrag',
					to: 'An',
					total: 'Insgesamt',
					message: 'Nachricht',
					encrypted: 'Nachricht ist verschlüsselt',
					noMessage: 'Keine Nachricht',
					cancel: 'Abbrechen',
					confirm: 'Bestätigen',
					sending: 'Sende...'
				},
				notBootedWarning: {
					title: 'NIS wurde noch nicht gebootet!',
					message: 'NIS muss gebootet werden, bevor Transaktionen gesendet werden können!'
				},
				bootingWarning: {
					title: 'NIS wird gebootet',
					message: 'Bitte warte bis der Bootprozess abgeschlossen ist, bevor Du eine Transaktion sendest.'
				},
				loadingWarning: {
					title: 'Datenbank wird geladen'
				}
			},
			clientInfo: {
				title: 'Software Informationen',
				ncc: 'NEM Community Client (NCC)',
				signer: 'Unterzeichner:',
				remoteServer: 'Verbundener NIS:',
				local: 'Lokal',
				nis: 'NEM Infrastructure Server (NIS)',
				sync: 'Synchron',
				notSync: 'Nicht synchron',
				notConnected: 'Nicht verbunden mit der NEM Cloud',
				loading: 'Lade...'
			},
			transactionDetails: {
				title: 'Transaktionsdetails',
				id: 'ID',
				hash: 'Hash',
				type: 'Transaktionstyp',
				direction: 'Transaktionsrichtung',
				pending: 'Ausstehend',
				outgoing: 'Ausgehend',
				incoming: 'Eingehend',
				self: 'Selbst',
				sender: 'Absender',
				multisigAccount: 'Multisig-Konto',
				issuer: 'Initiator',
				recipient: 'Empfänger',
				remote: 'Remote',
				multisigMessage: 'Vorhandene Signaturen',
				message: 'Nachricht',
				noMessage: 'Keine Nachricht',
				encrypted: 'Nachricht ist verschlüsselt',
				time: 'Zeitpunkt',
				confirmations: 'Bestätigungen',
				confirmationsUnknown: 'Unbekannt',
				amount: 'Betrag',
				fee: 'Gebühr',
				innerFee: 'Gebühr',
				multisigFees: 'Signierungs-Gebühren',
				cosignatory: 'Mitsignierer'
			},
			accountDetails: {
				title: 'Kontodetails',
				address: 'Adresse',
				label: 'Bezeichnung',
				noLabel: 'Keine Bezeichnung',
				add: 'Zum Adressbuch hinzufügen',
				remove: 'Vom Adressbuch entfernen',
				balance: 'Kontostand',
				vested: 'Für Ernte verwendbarer Anteil',
				importance: 'Wichtigkeit',
				publicKey: 'Öffentlicher Schlüssel',
				noPublicKey: 'Öffentlicher Schlüssel unbekannt',
				harvestedBlocks: 'Geerntete Böcke',
				close: 'Schließen'
			},
			bootLocalNode: {
				title: 'NIS booten',
				account: 'Adresse des Kontos, mit dem der NIS gebootet werden soll',
				noLabel: '<span class=\'null\'><Keine Bezeichnung></span>',
				wallet: 'Zugehörige Brieftasche',
				node: 'Name des NIS',
				boot: 'Booten',
				booting: 'Wird gebootet...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Bist du sicher, dass du den NIS <u>{{3}}</u> mit dem privaten Schlüssel des Kontos {{1}} ({{2}} XEM) booten möchtest?<br><br>Dadurch wird der <span class="sublabelWarning">private Schlüssel</span> des Kontos an diesen NIS übertragen: <u>{{3}}</u>. Es wird empfohlen, NIS nur mit leeren Konten zu booten.'
			},
			closeWallet: {
				title: 'Brieftasche schließen',
				message: 'Bist Du sicher, dass Du die Brieftasche schließen und zur Startseite wechseln möchtest?'
			},
			createAccount: {
				title: 'Neues Konto anlegen',
				label: 'Eigene Bezeichnung',
				wallet: 'Zugehörige Brieftasche',
				password: 'Passwort der Brieftasche',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde angelegt!',
				create: 'Anlegen'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Öffentlicher Schlüssel',
				privateKey: 'Privater Schlüssel',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: 'Ein existierendes Konto hinzufügen',
				privateKey: 'Privater Schlüssel des Kontos',
				wallet: 'Zugehörige Brieftasche',
				password: 'Passwort der Brieftasche',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde zur Brieftasche hinzugefügt!',
				add: 'Hinzufügen',
				label: 'Bezeichnung'
			},
			setPrimary: {
				title: 'Hauptkonto festlegen',
				account: 'Adresse des Kontos, welches das Hauptkonto werden soll',
				noLabel: '<span class=\'null\'><Keine Bezeichnung></span>',
				wallet: 'Zugehörige Brieftasche',
				password: 'Passwort der Brieftasche',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde als Hauptkonto festgelegt!',
				set: 'Als Hauptkonto festlegen'
			},
			changeWalletName: {
				title: 'Namen der Brieftasche ändern',
				wallet: 'Aktueller Name der Brieftasche',
				newName: 'Neuer Name der Brieftasche',
				password: 'Passwort der Brieftasche',
				successMessage: 'Der Name der Brieftasche wurde erfolgreich von <em>{{1}}</em> in <em>{{2}}</em> geändert.',
				change: 'Ändern'
			},
			changeWalletPassword: {
				title: 'Passwort der Brieftasche ändern',
				wallet: 'Brieftasche',
				password: 'Aktuelles Passwort',
				newPassword: 'Neues Passwort',
				confirmPassword: 'Neues Passwort bestätigen',
				successMessage: 'Das Passwort der Brieftasche wurde erfolgreich geändert',
				change: 'Ändern',
				passwordNotMatchTitle: 'Fehler!',
				passwordNotMatchMessage: 'Passwort und Passwortbestätigung sind verschieden. Bitte gib das neue Passwort beide Male richtig ein.'
			},
			changeAccountLabel: {
				title: 'Bezeichnung des Kontos ändern',
				label: 'Neue Bezeichnung des Kontos',
				wallet: 'Zugehörige Brieftasche',
				password: 'Passwort der Brieftasche',
				successMessage: 'Das Konto {{1}} hat jetzt die Bezeichnung {{2}}',
				change: 'Ändern'
			},
			removeAccount: {
				title: 'Konto entfernen',
				account: 'Konto',
				label: 'Bezeichnung des Kontos',
				wallet: 'Zugehörige Brieftasche',
				password: 'Passwort der Brieftasche',
				warning: 'Stelle bitte sicher, dass das Konto leer ist, bevor du es entfernst. Ohne Backup des privaten Schlüssels ist der Betrag sonst unwiederbringlich verloren.',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde entfernt!',
				remove: 'Entfernen'
			},
			nisUnavailable: {
				title: 'NIS nicht verfügbar',
				message: 'Nicht verbunden mit NEM Infrastructure Server (NIS), warte auf die Verbindung'
			},
			shutdown: {
				title: 'Programm schließen',
				message: 'Bist Du sicher, dass Du den NEM Community Client schließen möchtest?'
			},
			activateRemote: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Zugehörige Brieftasche',
				account: 'Adresse des Kontos',
				password: 'Passwort der Bieftasche',
				activate: 'Aktivieren',
				warning: 'Warning',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.'
			},
			deactivateRemote: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Zugehörige Brieftasche',
				account: 'Adresse des Kontos',
				password: 'Passwort der Bieftasche',
				deactivate: 'Deaktivieren',
				warning: 'Warning',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Zugehörige Brieftasche',
				account: 'Adresse des Kontos',
				password: 'Passwort der Brieftasche',
				start: 'Starten'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Zugehörige Brieftasche',
				account: 'Adresse des Kontos',
				password: 'Passwort der Brieftasche',
				stop: 'Beenden'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Kontakt hinzufügen',
				add: 'Hinzufügen'
			},
			editContact: {
				title: 'Kontakt bearbeiten',
				saveChanges: 'Änderungen speichern'
			},
			removeContact: {
				title: 'Kontakt entfernen',
				remove: 'Entfernen'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Die Brieftasche wurde erfolgreich importiert!',
			nav: {
				start: 'Erste Schritte',
				about: 'Über NEM',
				settings: 'Einstellungen'
			},
			main: {
				leftTitle: 'Neu bei <em>NEM</em>?',
				leftButton: 'Brieftasche anlegen',
				walletNamePlh: 'Name Deiner Brieftasche',
				passwordPlh: 'Passwort',
				confirmPasswordPlh: 'Passwort bestätigen',
				create: 'Anlegen',
				creating: 'Wird angelegt...',
				rightTitle: 'Bist Du schon ein <em>NEM</em>ber?',
				rightButton: 'Öffne Deine Brieftasche',
				openButton: 'Öffnen',
				walletsFound: '<strong>{{1}}</strong> <em>Brieftasche(n)</em> gefunden',
				copyright: 'Fotografie von <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC verschlüsselt Deine Brieftasche',
						description: '<em>Sicherheit</em> ist sehr wichtig, um den Raub von Münzen &amp; Anlagen zu verhindern.'
					},
					{
						title: 'Remote NEM Infrastructure Server',
						description: 'By using a remote NIS you don\'t have to synchronise the blockchain at start-up.',

					},
					{
						title: 'Delegated harvesting',
						description: 'With delegated harvesting you can harvest on remote NIS nodes!',

					},
					{
						title: 'Multisignature transactions',
						description: 'Secure your XEM and assets via in-blockchain multi-signature transactions.',

					},
					{
						title: 'Native language support',
						description: 'NEM user interface supports multiple languages. See "Settings".'
					},
					{
						title: 'Got any questions or feedback ?',
						description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

					}
				]
			},
			about: {
				sections: [
					{
						title: 'Wie funktioniert NCC?',
						paragraphs: [
							'<strong>NCC</strong> ermöglicht Dir den Zugriff auf Anlagen und NEM genauso wie eine herkömmliche Brieftasche. Du kannst',
							'<strong>NCC</strong> braucht Zugang zu einem <strong>NIS</strong> Server, um zu funktionieren. Normalerweise wird der Server lokal betrieben (wird zusammen mit dem <strong>NCC</strong> installiert)',
							'Du kannst auch den Zugang zu einem Remote-<strong>NIS</strong> konfigurieren.'
						],
						listItems: [
							'mehrere Brieftaschen haben',
							'mehrere Konten in jeder Brieftasche haben'
						]
					},
					{
						title: 'Was ist &#42;NIS?',
						paragraphs: [
							'Diese Komponente ist dafür zuständig, die <strong>NEM</strong> Cloud am Leben zu halten.',
							'The more <strong>NIS</strong> there are in the network, the better the security.,',
							'<strong>NIS</strong> ist der Zugangspunkt zur <strong>NEM</strong> Cloud.'
						],
						legend: '<strong>&#42;NIS</strong> steht für <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '© Copyright 2014-2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Ungefähr vor {{1}} Tagen',
			lastAccessJustNow: 'Gerade eben',
			lastAccessTooltip: 'Letzter Zugriff war {{1}}',
			primary: 'Hauptkonto',
			primaryShort: 'H',
			noLabel: '<Keine Bezeichnung>',
			copiedToClipboard: 'Die Adresse wurde in die Zwischenablage kopiert!',
			actions: {
				refreshInfo: 'Informationen aktualisieren',
				bootLocalNode: 'NIS booten',
				changeWalletName: 'Namen der Brieftasche ändern',
				changeWalletPassword: 'Passwort der Brieftasche ändern',
				mergeWallets: 'Brieftaschen zusammenführen',
				exportWallet: 'Brieftasche exportieren',
				createAccount: 'Neues Konto anlegen',
				createRealAccountData: 'Daten für ein echtes Konto erzeugen',
				verifyRealAccountData: 'Daten eines echten Kontos verifizieren',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				viewDetails: 'View Account Details',
				addAccount: 'Existierendes Konto hinzufügen',
				changeAccountLabel: 'Bezeichnung des Kontos ändern',
				setPrimary: 'Als Hauptkonto festlegen',
				removeAccount: 'Konto entfernen',
				clientInfo: 'Software Informationen',
				closeWallet: 'Brieftasche schließen',
				closeProgram: 'Programm beenden',
				copyClipboard: 'Adresse in die Zwischenablage kopieren',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Konvertiere anderes Konto in Multisig-Konto'
			},
			nav: [
				'Übersicht',
				'Nachrichten',
				'Adressbuch',
				'Transaktionen',
				'Geerntete Blöcke',
				'Börse',
				'Neuigkeiten',
				'Anwendungen',
				'Konten',
				'Einstellungen',
				'Programm beenden'
			],
			bootNodeWarning: 'NIS muss gebootet werden, bevor du alle NCC Features verwenden kannst.'
		},
		dashboard: {
			assets: {
				title: 'Deine Anlagen'
			},
			importance: {
				title: 'Wichtigkeit',
				unknown: 'Unbekannter Status',
				start: 'Ernte beginnen',
				harvesting: 'Es wird geerntet',
				stop: 'Ernte beenden',
				description: 'Wichtigkeit des Kontos für die NEM Cloud',
				remoteHarvest: {
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Sichere Ernte',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			},
			transactions: {
				title: 'Letzte Transaktionen',
				sendNem: 'XEM senden',
				signMultisig: 'Signieren',
				balance: 'Kontostand',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig-Konto',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Für Ernte verwendbarer Anteil',
				syncStatus: '(Block {{1}}{{#2}} : etwa {{3}} Tage im Rückstand{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'unbekannt',
				columns: [
					'',
					'Zeitpunkt',
					'Absender/Empfänger',
					'Nachricht',
					'',
					'Details',
					'Bestätigungen',
					'Gebühr',
					'Betrag'
				],
				noMessage: 'Keine Nachricht',
				encrypted: 'Nachricht ist verschlüsselt',
				view: 'Ansehen',
				confirmationsUnknown: 'Unbekannt',
				pending: 'Ausstehend',
				seeAll: 'Alle Transaktionen ansehen',
				noTransactions: 'Es wurden noch keine Transaktionen ausgeführt'
			},
			nemValue: {
				title: 'XEM Statistiken'
			},
			messages: {
				titleTooltip: 'Nachrichten'
			},
			news: {
				titleTooltip: 'Neuigkeiten'
			},
			notAvailable: 'Noch nicht verfügbar im Beta Release'
		},
		transactions: {
			title: 'Transaktionen',
			sendNem: 'XEM senden',
			balance: 'Kontostand',
			filters: {
				confirmed: 'Bestätigt',
				unconfirmed: 'Ausstehend',
				incoming: 'Eingehend',
				outgoing: 'Ausgehend'
			},
			table: {
				columns: [
					'',
					'Zeitpunkt',
					'Absender/Empfänger',
					'Nachricht',
					'',
					'Details',
					'Bestätigungen',
					'Gebühr',
					'Betrag'
				],
				noMessage: 'Keine Nachricht',
				encrypted: 'Nachricht ist verschlüsselt',
				view: 'Ansehen',
				confirmationsUnknown: 'Unbekannt',
				pending: 'Ausstehend',
				noTransactions: 'Es wurden noch keine Transaktionen ausgeführt',
				loading: 'Lade weitere Transaktionen...'
			}
		},
		harvestedBlocks: {
			title: 'Geerntete Blöcke',
			feeEarned: 'Aus den letzten 25 geernteten Blöcken erhaltene Gebühren',
			unknown: 'Unbekannt',
			table: {
				columns: [
					'Block',
					'Zeitpunkt',
					'Schwierigkeitsgrad',
					'Gebühr'
				],
				noBlocks: 'Noch keine Blöcke geerntet',
				loading: 'Lade weitere geerntete Blöcke...'
			},
			harvesting: {
				unknown: 'Unbekannter Status',
				start: 'Ernte beginnen',
				harvesting: 'Ernte',
				stop: 'Ernte beenden',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: 'Adressbuch',
			addContact: 'Kontakt hinzufügen',
			table: {
				columns: [
					'Adresse des Kontakts',
					'Eigene Bezeichnung',
					'Öffentliche Bezeichnung'
				],
				noContacts: 'Keine Kontakte im Adressbuch vorhanden'
			},
			noLabel: 'Keine Bezeichnung',
			sendNem: 'XEM senden',
			edit: 'Bearbeiten',
			remove: 'Entfernen'
		},
		settings: {
			title: 'Einstellungen',
			settings: [
				{
					name: 'Sprache'
				}
			],
			save: 'Änderungen speichern',
			saveSuccess: 'Die Änderungen wurden erfolgreich gespeichert'
		}
	}
});
