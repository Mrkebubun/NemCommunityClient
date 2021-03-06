package org.nem.monitor.visitors;

import org.junit.Test;
import org.mockito.Mockito;
import org.nem.core.node.NodeEndpoint;
import org.nem.monitor.NemConnector;
import org.nem.monitor.launcher.*;
import org.nem.monitor.node.*;

public class NodeManagerTest {

	@Test
	public void shutdownDelegatesToConnector() {
		// Arrange:
		final TestContext context = new TestContext();

		// Act:
		context.manager.shutdown();

		// Assert:
		Mockito.verify(context.connector, Mockito.times(1)).shutdown();
	}

	@Test
	public void launchDelegatesToLauncher() {
		// Arrange:
		final TestContext context = new TestContext();

		// Act:
		context.manager.launch();

		// Assert:
		Mockito.verify(context.launcher, Mockito.times(1)).launch(NemNodeType.NCC);
	}

	@Test
	public void launchBrowserDelegatesToBrowserWhenNodeHasBrowserGui() {
		// Arrange:
		final TestContext context = new TestContext(true);

		// Act:
		context.manager.launchBrowser();

		// Assert:
		Mockito.verify(context.browser, Mockito.times(1)).navigate(NodeEndpoint.fromHost("10.0.0.12"));
	}

	@Test
	public void launchBrowserDoesNotDelegateToBrowserWhenNodeDoesNotHaveBrowserGui() {
		// Arrange:
		final TestContext context = new TestContext(false);

		// Act:
		context.manager.launchBrowser();

		// Assert:
		Mockito.verify(context.browser, Mockito.times(0)).navigate(NodeEndpoint.fromHost(Mockito.any()));
	}

	private static class TestContext {
		private final NemConnector connector = Mockito.mock(NemConnector.class);
		private final NodeLauncher launcher = Mockito.mock(NodeLauncher.class);
		private final WebBrowser browser = Mockito.mock(WebBrowser.class);
		private final NodeManager manager;

		private TestContext() {
			this(false);
		}

		private TestContext(final boolean hasBrowserGui) {
			final NemNodePolicy nodePolicy = Mockito.mock(NemNodePolicy.class);
			Mockito.when(nodePolicy.getEndpoint()).thenReturn(NodeEndpoint.fromHost("10.0.0.12"));
			Mockito.when(nodePolicy.hasBrowserGui()).thenReturn(hasBrowserGui);
			Mockito.when(nodePolicy.getNodeType()).thenReturn(NemNodeType.NCC);

			this.manager = new NodeManager(nodePolicy, this.connector, this.launcher, this.browser);
		}
	}
}