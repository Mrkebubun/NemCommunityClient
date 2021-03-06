package org.nem.console.commands;

import org.apache.commons.cli.*;
import org.nem.console.models.AliasedKeyPair;
import org.nem.console.utils.*;

import java.util.List;

public class ReEncryptCommand implements Command {
	@Override
	public String getName() {
		return "reencrypt";
	}

	@Override
	public void handle(final CommandLine commandLine) {
		System.out.println("Loading key pairs...");
		final List<AliasedKeyPair> keyPairs = KeyPairsStorage.load(commandLine);

		System.out.println("Saving key pairs...");
		KeyPairsStorage.save(
				keyPairs,
				commandLine.getOptionValue("output"),
				commandLine.getOptionValue("newPass"),
				Integer.parseInt(commandLine.getOptionValue("newNumHashes", "1")));
	}

	@Override
	public Options getOptions() {
		final Options options = new Options();
		OptionsUtils.addReadOptions(options);
		options.addOption("output", true, "The output cold wallet file");
		options.addOption("newPass", true, "The new cold wallet password");
		options.addOption("newNumHashes", true, "The new number of password hashes");
		return options;
	}
}
