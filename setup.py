from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in change_language/__init__.py
from change_language import __version__ as version

setup(
	name="change_language",
	version=version,
	description="This app create language toggle ",
	author="zaid",
	author_email="zaid@standardtouch.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
